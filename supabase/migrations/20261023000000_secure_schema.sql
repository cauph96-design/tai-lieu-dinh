-- ==============================================================================
-- TÀI LIỆU ĐỈNH — SUPABASE POSTGRESQL & ROW LEVEL SECURITY (RLS) MIGRATION
-- Kiến trúc: PostgreSQL + Supabase Auth + RLS + Audit Logging
-- Phiên bản: 1.0.0 (Bảo mật tối đa, phân quyền tối thiểu Least Privilege)
-- ==============================================================================

-- 1. BẬT TIỆN ÍCH MỞ RỘNG
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. TẠO CÁC KIỂU ENUM DỮ LIỆU
DO $$ BEGIN
  CREATE TYPE document_status AS ENUM ('draft', 'published', 'archived');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE education_level AS ENUM ('Tiểu học', 'THCS', 'THPT');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE target_audience AS ENUM ('giaovien', 'nguoihoc', 'ca_hai');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE document_type AS ENUM ('giaoan', 'dekiemtra', 'baitap', 'chuyende', 'ontap');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- ==============================================================================
-- 3. BẢNG PHÂN QUYỀN QUẢN TRỊ (ADMIN USERS - RBAC)
-- Không dựa vào user_metadata phía client vì có thể bị giả mạo.
-- Bảng này liên kết với auth.users của Supabase Auth.
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.admin_users (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('super_admin', 'editor')),
  full_name TEXT,
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Hàm kiểm tra quyền Admin an toàn (SECURITY DEFINER chạy với quyền chủ sở hữu database)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN FALSE;
  END IF;
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE user_id = auth.uid()
  );
END;
$$;

-- Hàm kiểm tra quyền Super Admin
CREATE OR REPLACE FUNCTION public.is_super_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN FALSE;
  END IF;
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE user_id = auth.uid() AND role = 'super_admin'
  );
END;
$$;

-- RLS trên admin_users:
-- Chỉ admin mới xem được danh sách admin. Tuyệt đối không cho phép đăng ký/chèn công khai.
CREATE POLICY "Admins can view admin_users"
  ON public.admin_users
  FOR SELECT
  TO authenticated
  USING (public.is_admin());

CREATE POLICY "Only super_admins can insert or modify admin_users"
  ON public.admin_users
  FOR ALL
  TO authenticated
  USING (public.is_super_admin())
  WITH CHECK (public.is_super_admin());

-- ==============================================================================
-- 4. BẢNG DANH MỤC HỌC LIỆU (CATEGORIES)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  type TEXT NOT NULL CHECK (type IN ('cap_hoc', 'mon_hoc', 'bo_sach', 'loai_tai_lieu')),
  order_index INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Khách vãng lai và mọi người đều có quyền xem danh mục
CREATE POLICY "Public can view categories"
  ON public.categories
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Chỉ admin mới có quyền thêm/sửa/xóa danh mục
CREATE POLICY "Admins manage categories"
  ON public.categories
  FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ==============================================================================
-- 5. BẢNG TÀI LIỆU CHÍNH (DOCUMENTS)
-- Tách bạch rõ 3 tầng: Public fields vs Internal/Admin fields vs Audit tracking
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT NOT NULL UNIQUE, -- Mã tài liệu chuẩn: TH1-TOAN-01
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  subject TEXT NOT NULL,
  grade TEXT NOT NULL,
  education_level education_level NOT NULL,
  audience target_audience NOT NULL DEFAULT 'ca_hai',
  category_type document_type NOT NULL DEFAULT 'giaoan',
  file_format TEXT NOT NULL DEFAULT 'DOCX',
  preview_url TEXT, -- URL bản đọc thử PDF an toàn (nếu có)
  curriculum_standard TEXT, -- Ví dụ: Giáo án (CV 2345), KHBD (CV 5512)
  matrix_notes TEXT, -- Thông tin ma trận đặc tả & đáp án
  textbook_series TEXT, -- Ví dụ: Kết nối tri thức, Cánh Diều, Chân trời sáng tạo
  
  -- Trạng thái xuất bản
  status document_status NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  
  -- CÁC TRƯỜNG NỘI BỘ QUẢN TRỊ (CHỈ ADMIN THẤY, KHÔNG BAO GIỜ PUBLIC)
  internal_notes TEXT, -- Ghi chú nội bộ, kiểm duyệt
  cost_notes TEXT,     -- Ghi chú chi phí / bản quyền
  source_provider TEXT,-- Nguồn biên tập viên / giáo viên cung cấp
  contact_private TEXT,-- Số liên hệ người biên soạn riêng tư
  
  -- Audit metadata
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Tạo chỉ mục tìm kiếm tối ưu
CREATE INDEX IF NOT EXISTS idx_documents_status ON public.documents(status);
CREATE INDEX IF NOT EXISTS idx_documents_education_level ON public.documents(education_level);
CREATE INDEX IF NOT EXISTS idx_documents_grade ON public.documents(grade);
CREATE INDEX IF NOT EXISTS idx_documents_subject ON public.documents(subject);
CREATE INDEX IF NOT EXISTS idx_documents_code ON public.documents(code);
CREATE INDEX IF NOT EXISTS idx_documents_published ON public.documents(status, published_at DESC);

-- BẬT ROW LEVEL SECURITY (RLS)
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- CHÍNH SÁCH 1: Người dùng công khai (chưa đăng nhập & đã đăng nhập thường)
-- CHỈ ĐƯỢC PHÉP ĐỌC các bản ghi đã xuất bản (status = 'published')
CREATE POLICY "Public users can only view published documents"
  ON public.documents
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

-- CHÍNH SÁCH 2: Quản trị viên (Admin) được toàn quyền (Đọc bản nháp, Thêm, Sửa, Xóa)
CREATE POLICY "Admins have full access to all documents"
  ON public.documents
  FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- ==============================================================================
-- 6. VIEW CÔNG KHAI BẢO MẬT (SECURITY INVOKER VIEW)
-- Đảm bảo API công khai không thể vô tình SELECT các trường nội bộ (internal_notes, cost_notes)
-- ==============================================================================
CREATE OR REPLACE VIEW public.v_public_documents
WITH (security_invoker = true)
AS
SELECT
  id,
  code,
  slug,
  title,
  description,
  subject,
  grade,
  education_level,
  audience,
  category_type,
  file_format,
  preview_url,
  curriculum_standard,
  matrix_notes,
  textbook_series,
  published_at
FROM public.documents
WHERE status = 'published';

-- ==============================================================================
-- 7. BẢNG GHI NHẬT KÝ KIỂM TOÁN (AUDIT LOGS)
-- Ghi lại mọi hành động Thêm/Sửa/Xóa của Admin để truy vết an ninh
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.document_audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID REFERENCES public.documents(id) ON DELETE SET NULL,
  action TEXT NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
  performed_by UUID REFERENCES auth.users(id),
  changed_fields JSONB,
  ip_address TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.document_audit_logs ENABLE ROW LEVEL SECURITY;

-- Chỉ admin mới xem được audit log
CREATE POLICY "Only admins can view audit logs"
  ON public.document_audit_logs
  FOR SELECT
  TO authenticated
  USING (public.is_admin());

-- Trigger tự động ghi nhật ký kiểm toán
CREATE OR REPLACE FUNCTION public.fn_audit_document_changes()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.document_audit_logs (document_id, action, performed_by, changed_fields)
    VALUES (NEW.id, 'INSERT', auth.uid(), to_jsonb(NEW));
    RETURN NEW;
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO public.document_audit_logs (document_id, action, performed_by, changed_fields)
    VALUES (NEW.id, 'UPDATE', auth.uid(), jsonb_build_object(
      'before', to_jsonb(OLD),
      'after', to_jsonb(NEW)
    ));
    NEW.updated_at = now();
    NEW.updated_by = auth.uid();
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    INSERT INTO public.document_audit_logs (document_id, action, performed_by, changed_fields)
    VALUES (OLD.id, 'DELETE', auth.uid(), to_jsonb(OLD));
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$;

DROP TRIGGER IF EXISTS trg_audit_document_changes ON public.documents;
CREATE TRIGGER trg_audit_document_changes
  AFTER INSERT OR UPDATE OR DELETE ON public.documents
  FOR EACH ROW
  EXECUTE FUNCTION public.fn_audit_document_changes();

-- ==============================================================================
-- 8. STORAGE BUCKET POLICIES (CHO ẢNH BÌA VÀ FILE TÀI LIỆU)
-- ==============================================================================
-- Giả định có 2 bucket:
-- a) 'public-covers': Ảnh bìa công khai, mọi người có thể xem.
-- b) 'document-files': File Word gốc (DOCX), TUYỆT ĐỐI RIÊNG TƯ, chỉ cấp signed URL.
--
-- Chính sách mẫu (áp dụng khi tạo bucket trên Supabase Storage):
-- 
-- Bucket 'public-covers':
-- CREATE POLICY "Public can view covers" ON storage.objects FOR SELECT TO anon, authenticated USING (bucket_id = 'public-covers');
-- CREATE POLICY "Admins can upload covers" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'public-covers' AND public.is_admin());
--
-- Bucket 'document-files':
-- Không cấp quyền SELECT công khai!
-- CREATE POLICY "Admins manage document files" ON storage.objects FOR ALL TO authenticated USING (bucket_id = 'document-files' AND public.is_admin()) WITH CHECK (bucket_id = 'document-files' AND public.is_admin());
