// ==============================================================================
// TÀI LIỆU ĐỈNH — ADMIN API ROUTE (Next.js App Router)
// Endpoint: /api/admin/documents
// Đặc tính an toàn:
// - Yêu cầu xác thực Supabase Auth Bearer Token.
// - Kiểm tra tài khoản trong bảng admin_users (RBAC).
// - Từ chối 401/403 đối với người chưa đăng nhập hoặc user thường.
// ==============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { adminGetAllDocuments } from '@/lib/dal/document-repository';
import { verifyAdminSession } from '@/lib/dal/auth';
import { createClient } from '@supabase/supabase-js';

function getAdminClient(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    }
  });
}

export async function GET(req: NextRequest) {
  try {
    const supabase = getAdminClient(req);
    const admin = await verifyAdminSession(supabase);

    if (!admin) {
      return NextResponse.json(
        { error: 'Unauthorized: Bạn không có quyền quản trị viên' },
        { status: 403 }
      );
    }

    const allDocs = await adminGetAllDocuments(supabase);
    return NextResponse.json({
      admin: admin.email,
      role: admin.role,
      count: allDocs.length,
      data: allDocs
    });
  } catch (error: any) {
    console.error('[ADMIN API ERROR]:', error);
    return NextResponse.json({ error: error.message || 'Lỗi xử lý yêu cầu quản trị' }, { status: error.status || 500 });
  }
}
