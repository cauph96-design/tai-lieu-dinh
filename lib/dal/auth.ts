// ==============================================================================
// TÀI LIỆU ĐỈNH — SERVER-SIDE AUTHORIZATION HELPER
// Nguyên tắc: Zero-trust client. Luôn xác thực session và truy vấn bảng admin_users
// trên server, không tin cậy header do client tự gửi lên hoặc metadata giả mạo.
// ==============================================================================

import { AdminUser } from './types';

/**
 * Kiểm tra xem request hiện tại có thuộc về một tài khoản Admin hợp lệ hay không.
 * @param supabaseClient Supabase client được tạo ở server với context request (cookies/headers)
 * @returns AdminUser nếu hợp lệ, null nếu không có quyền
 */
export async function verifyAdminSession(supabaseClient: any): Promise<AdminUser | null> {
  try {
    // 1. Lấy thông tin user từ session Supabase Auth (an toàn)
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      return null;
    }

    // 2. Truy vấn trực tiếp bảng admin_users để kiểm tra quyền hạn (Role-based Access Control)
    // Tuyệt đối không dùng client metadata vì user có thể gọi API Supabase tự sửa metadata.
    const { data: adminRecord, error: dbError } = await supabaseClient
      .from('admin_users')
      .select('user_id, role, full_name, email, created_at')
      .eq('user_id', user.id)
      .single();

    if (dbError || !adminRecord) {
      return null;
    }

    return {
      userId: adminRecord.user_id,
      role: adminRecord.role,
      fullName: adminRecord.full_name,
      email: adminRecord.email || user.email,
      createdAt: adminRecord.created_at
    };
  } catch (err) {
    console.error('[SECURITY AUDIT] Exception during verifyAdminSession:', err);
    return null;
  }
}

/**
 * Ném lỗi 403 nếu người dùng không phải là admin
 */
export async function requireAdmin(supabaseClient: any): Promise<AdminUser> {
  const admin = await verifyAdminSession(supabaseClient);
  if (!admin) {
    const error = new Error('Forbidden: Yêu cầu quyền quản trị viên Tài Liệu Đỉnh');
    (error as any).status = 403;
    throw error;
  }
  return admin;
}
