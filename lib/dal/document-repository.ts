// ==============================================================================
// TÀI LIỆU ĐỈNH — DOCUMENT REPOSITORY (DATA ACCESS LAYER)
// Tập trung hóa mọi truy vấn cơ sở dữ liệu, phân tách rạch ròi giữa Public và Admin
// ==============================================================================

import { PublicDocument, AdminDocument, PUBLIC_FIELD_WHITELIST } from './types';
import { requireAdmin } from './auth';

/**
 * Lọc sạch bản ghi chỉ giữ lại các trường công khai hợp lệ
 */
export function sanitizeToPublic(rawDoc: any): PublicDocument {
  const clean: any = {};
  for (const field of PUBLIC_FIELD_WHITELIST) {
    if (field in rawDoc) {
      clean[field] = rawDoc[field];
    }
  }
  return clean as PublicDocument;
}

/**
 * 1. LẤY DANH SÁCH TÀI LIỆU CÔNG KHAI (PUBLIC QUERY)
 * - Sử dụng Security Invoker View (v_public_documents)
 * - Tuân thủ Row Level Security (RLS)
 * - Tuyệt đối không bao giờ trả về status = 'draft' hay các cột nội bộ
 */
export async function getPublicDocuments(supabaseClient: any, filters?: {
  capHoc?: string;
  khoi?: string;
  mon?: string;
  query?: string;
}): Promise<PublicDocument[]> {
  let query = supabaseClient
    .from('v_public_documents')
    .select('*')
    .order('published_at', { ascending: false });

  if (filters?.capHoc) {
    query = query.eq('education_level', filters.capHoc);
  }
  if (filters?.khoi) {
    query = query.eq('grade', filters.khoi);
  }
  if (filters?.mon) {
    query = query.eq('subject', filters.mon);
  }
  if (filters?.query) {
    const cleanQ = filters.query.trim().slice(0, 100);
    query = query.or(`title.ilike.%${cleanQ}%,description.ilike.%${cleanQ}%,code.ilike.%${cleanQ}%`);
  }

  const { data, error } = await query;
  if (error) {
    console.error('[DAL] Error fetching public documents:', error);
    throw new Error('Không thể tải danh sách tài liệu');
  }

  return (data || []).map((row: any) => ({
    id: row.id,
    code: row.code,
    slug: row.slug,
    title: row.title,
    description: row.description,
    subject: row.subject,
    grade: row.grade,
    educationLevel: row.education_level,
    audience: row.audience,
    categoryType: row.category_type,
    fileFormat: row.file_format,
    previewUrl: row.preview_url,
    curriculumStandard: row.curriculum_standard,
    matrixNotes: row.matrix_notes,
    textbookSeries: row.textbook_series,
    publishedAt: row.published_at
  }));
}

/**
 * 2. LẤY CHI TIẾT TÀI LIỆU CÔNG KHAI THEO MÃ HOẶC SLUG
 */
export async function getPublicDocumentByCode(supabaseClient: any, code: string): Promise<PublicDocument | null> {
  const { data, error } = await supabaseClient
    .from('v_public_documents')
    .select('*')
    .eq('code', code.trim())
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    code: data.code,
    slug: data.slug,
    title: data.title,
    description: data.description,
    subject: data.subject,
    grade: data.grade,
    educationLevel: data.education_level,
    audience: data.audience,
    categoryType: data.category_type,
    fileFormat: data.file_format,
    previewUrl: data.preview_url,
    curriculumStandard: data.curriculum_standard,
    matrixNotes: data.matrix_notes,
    textbookSeries: data.textbook_series,
    publishedAt: data.published_at
  };
}

/**
 * 3. DÀNH CHO ADMIN: LẤY TOÀN BỘ TÀI LIỆU (BAO GỒM BẢN NHÁP VÀ GHI CHÚ NỘI BỘ)
 * Yêu cầu quyền quản trị viên hợp lệ.
 */
export async function adminGetAllDocuments(supabaseClient: any): Promise<AdminDocument[]> {
  await requireAdmin(supabaseClient);

  const { data, error } = await supabaseClient
    .from('documents')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[ADMIN DAL] Error fetching all documents:', error);
    throw new Error('Lỗi truy vấn dữ liệu quản trị');
  }

  return (data || []).map((row: any) => ({
    id: row.id,
    code: row.code,
    slug: row.slug,
    title: row.title,
    description: row.description,
    subject: row.subject,
    grade: row.grade,
    educationLevel: row.education_level,
    audience: row.audience,
    categoryType: row.category_type,
    fileFormat: row.file_format,
    previewUrl: row.preview_url,
    curriculumStandard: row.curriculum_standard,
    matrixNotes: row.matrix_notes,
    textbookSeries: row.textbook_series,
    publishedAt: row.published_at,
    status: row.status,
    internalNotes: row.internal_notes,
    costNotes: row.cost_notes,
    sourceProvider: row.source_provider,
    contactPrivate: row.contact_private,
    createdBy: row.created_by,
    updatedBy: row.updated_by,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }));
}
