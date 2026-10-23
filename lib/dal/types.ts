// ==============================================================================
// TÀI LIỆU ĐỈNH — DATA ACCESS LAYER TYPES (TypeScript)
// Phân loại dữ liệu 3 tầng: Public vs Internal vs Auth/Secret
// ==============================================================================

export type EducationLevel = 'Tiểu học' | 'THCS' | 'THPT';
export type TargetAudience = 'giaovien' | 'nguoihoc' | 'ca_hai';
export type DocumentType = 'giaoan' | 'dekiemtra' | 'baitap' | 'chuyende' | 'ontap';
export type DocumentStatus = 'draft' | 'published' | 'archived';

/**
 * 1. DỮ LIỆU CÔNG KHAI (PUBLIC DOCUMENT)
 * Dành cho khách vãng lai, hiển thị trên website, search index và SEO metadata.
 * Tuyệt đối không chứa ghi chú nội bộ, chi phí, hoặc thông tin liên hệ riêng tư.
 */
export interface PublicDocument {
  id?: string;
  code: string;               // Mã tài liệu (TH1-TOAN-01)
  slug: string;               // URL-friendly slug
  title: string;              // Tiêu đề
  description: string;        // Mô tả công khai
  subject: string;            // Môn học
  grade: string;              // Khối lớp (Lớp 1 đến Lớp 12)
  educationLevel: EducationLevel; // Tiểu học, THCS, THPT
  audience: TargetAudience;   // Giáo viên, Người học, Cả hai
  categoryType: DocumentType; // Giáo án, Đề kiểm tra, Bài tập...
  fileFormat: string;         // DOCX
  previewUrl?: string | null; // URL bản xem thử PDF an toàn
  curriculumStandard?: string;// Chuẩn CV 2345, CV 5512
  matrixNotes?: string;       // Ghi chú ma trận & đáp án
  textbookSeries?: string;    // Kết nối tri thức, Cánh Diều...
  publishedAt?: string | null;// Thời điểm xuất bản
}

/**
 * 2. DỮ LIỆU NỘI BỘ QUẢN TRỊ (ADMIN DOCUMENT)
 * Kế thừa PublicDocument và bổ sung các trường chỉ Admin mới được phép thấy.
 */
export interface AdminDocument extends PublicDocument {
  status: DocumentStatus;     // draft, published, archived
  internalNotes?: string | null; // Ghi chú kiểm duyệt nội bộ
  costNotes?: string | null;     // Chi phí / nguồn tài liệu
  sourceProvider?: string | null;// Người biên soạn / cung cấp
  contactPrivate?: string | null;// Số điện thoại / liên hệ riêng
  createdBy?: string;
  updatedBy?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * 3. DỮ LIỆU XÁC THỰC VÀ NHẬT KÝ KIỂM TOÁN (AUDIT & AUTH)
 */
export interface AdminUser {
  userId: string;
  role: 'super_admin' | 'editor';
  fullName?: string;
  email?: string;
  createdAt: string;
}

export interface AuditLogEntry {
  id: string;
  documentId?: string;
  action: 'INSERT' | 'UPDATE' | 'DELETE';
  performedBy: string;
  changedFields?: Record<string, unknown>;
  ipAddress?: string;
  createdAt: string;
}

/**
 * Danh sách các trường được phép công khai (Whitelist)
 */
export const PUBLIC_FIELD_WHITELIST: (keyof PublicDocument)[] = [
  'id',
  'code',
  'slug',
  'title',
  'description',
  'subject',
  'grade',
  'educationLevel',
  'audience',
  'categoryType',
  'fileFormat',
  'previewUrl',
  'curriculumStandard',
  'matrixNotes',
  'textbookSeries',
  'publishedAt'
];
