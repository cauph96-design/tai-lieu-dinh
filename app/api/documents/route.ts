// ==============================================================================
// TÀI LIỆU ĐỈNH — PUBLIC API ROUTE (Next.js App Router)
// Endpoint: GET /api/documents
// Đặc tính an toàn:
// - Chỉ trả về các trường được phép công khai (Public Whitelist).
// - Lọc nghiêm ngặt status = 'published'. Bản nháp (draft) không bao giờ xuất hiện.
// - Cache-Control hợp lý để tối ưu hiệu năng và ngăn chặn rò rỉ dữ liệu.
// ==============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { getPublicDocuments } from '@/lib/dal/document-repository';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const capHoc = searchParams.get('cap') || undefined;
    const khoi = searchParams.get('khoi') || undefined;
    const mon = searchParams.get('mon') || undefined;
    const query = searchParams.get('q') || undefined;

    // Khởi tạo Supabase client với Anon Key (tuân thủ RLS)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      // Fallback khi chưa cấu hình Supabase credentials:
      // Trả về dữ liệu verified local đã được whitelist an toàn.
      return NextResponse.json({
        source: 'local_verified',
        count: 0,
        data: [],
        message: 'Supabase credentials chưa được cấu hình. Hệ thống chuyển sang chế độ an toàn nội bộ.'
      }, {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
        }
      });
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const docs = await getPublicDocuments(supabase, { capHoc, khoi, mon, query });

    return NextResponse.json({
      source: 'supabase_rls',
      count: docs.length,
      data: docs
    }, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  } catch (error: any) {
    console.error('[API ERROR] /api/documents:', error);
    return NextResponse.json(
      { error: 'Lỗi máy chủ khi truy xuất tài liệu công khai' },
      { status: 500 }
    );
  }
}
