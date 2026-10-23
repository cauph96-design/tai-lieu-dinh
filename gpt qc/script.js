/**
 * TÀI LIỆU ĐỈNH — SCRIPT XỬ LÝ TOÀN TRANG (PHIÊN BẢN MỚI PASTEL HỒNG & XANH LÁ)
 * Tên thương hiệu: Tài Liệu Đỉnh | Slogan chính thức: Đỉnh cao tài liệu
 * Phong cách thiết kế: Editorial, Tối giản, Ấm áp (Apple & Starbucks Inspired)
 * Bảng màu nhận diện: Hồng pastel (#F3D9E2, #FAEDEF) & Xanh lá (#DCEADD, #47765B, #254A38)
 * Zalo tư vấn chính thức: 0926.999.869 (https://zalo.me/0926999869)
 */

// ─── DỮ LIỆU TÀI LIỆU MINH HỌA (66 TÀI LIỆU WORD LỚP 1–12: TIỂU HỌC, THCS, THPT) ───
// QUẢN TRỊ DỮ LIỆU DEMO:
// - Bộ 66 bản ghi mẫu minh họa cấu trúc chuẩn cho Tiểu học, THCS và THPT.
// - Các đường dẫn xem thử (linkDemo) đã được xác minh độc lập, không dùng chung link cho các tài liệu khác nhau.
// - Hệ thống hỗ trợ nạp dữ liệu động từ Google Sheet (CONFIG.SHEET_ID) an toàn qua fetch() JSON.
let danhSach = [
  {
    "ma": "TH1-TOAN-01",
    "tieuDe": "Giáo án (CV 2345) Toán 1 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Kế hoạch bài dạy Toán 1 soạn chuẩn 4 bước theo Công văn 2345/BGDĐT-GDTH, tích hợp hình ảnh trực quan và phiếu bài tập phát triển phẩm chất, năng lực.",
    "mon": "Toán",
    "khoi": "Lớp 1",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Phiếu bài tập & hoạt động"
  },
  {
    "ma": "TH1-TV-02",
    "tieuDe": "Kế hoạch bài dạy Tiếng Việt 1 theo CV 2345 — Bộ sách Chân trời sáng tạo",
    "moTa": "Giáo án Tiếng Việt 1 phân môn Học vần và Luyện đọc theo chuẩn CV 2345, thiết kế trò chơi ngôn ngữ sinh động, kèm phiếu rèn chữ và đọc hiểu.",
    "mon": "Tiếng Việt",
    "khoi": "Lớp 1",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "https://drive.google.com/file/d/1nZmAg8-FrKxhI8i8RrxzYDg0GDTdRPkz/view?usp=sharing",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Kèm slide & phiếu rèn chữ"
  },
  {
    "ma": "TH1-ANH-03",
    "tieuDe": "Bộ đề kiểm tra định kỳ Tiếng Anh 1 theo Thông tư 27 (Bộ sách Global Success)",
    "moTa": "Đề kiểm tra giữa kỳ và cuối năm Tiếng Anh 1 đánh giá năng lực ngôn ngữ theo Thông tư 27/2020/TT-BGDĐT, có đầy đủ ma trận và file nghe audio.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 1",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Đầy đủ ma trận & audio"
  },
  {
    "ma": "TH1-TNXH-04",
    "tieuDe": "Giáo án (CV 2345) Tự nhiên và Xã hội 1 — Bộ sách Cánh Diều",
    "moTa": "Kế hoạch bài dạy TN&XH 1 trọn bộ cả năm theo CV 2345, định hướng giáo dục tích hợp khoa học và đời sống qua các phiếu bài tập trải nghiệm.",
    "mon": "Tự nhiên và Xã hội",
    "khoi": "Lớp 1",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Phiếu trải nghiệm Word"
  },
  {
    "ma": "TH2-TOAN-05",
    "tieuDe": "Bộ đề kiểm tra định kỳ Toán 2 theo Thông tư 27 (Bộ sách Cánh Diều)",
    "moTa": "Đề kiểm tra giữa kỳ 1, kỳ 2 và cuối năm môn Toán 2 có bảng đặc tả ma trận 3 mức độ, bài tập phân hóa theo chuẩn đánh giá học sinh tiểu học.",
    "mon": "Toán",
    "khoi": "Lớp 2",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Ma trận 3 mức độ & lời giải"
  },
  {
    "ma": "TH2-TV-06",
    "tieuDe": "Giáo án (CV 2345) Tiếng Việt 2 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Kế hoạch bài dạy môn Tiếng Việt 2 trọn bộ 35 tuần theo CV 2345, có ma trận bài dạy, bảng kiểm đánh giá kỹ năng đọc hiểu và viết đoạn văn.",
    "mon": "Tiếng Việt",
    "khoi": "Lớp 2",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Đầy đủ 35 tuần dạy học"
  },
  {
    "ma": "TH2-ANH-07",
    "tieuDe": "Tài liệu ôn tập & Bài tập bổ trợ Tiếng Anh 2 (Bộ sách Family and Friends)",
    "moTa": "Hệ thống từ vựng, mẫu câu và phiếu luyện tập cuối tuần Tiếng Anh 2 thiết kế theo chuẩn GDPT 2018, giúp học sinh củng cố kiến thức vững chắc.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 2",
    "capHoc": "Tiểu học",
    "doiTuong": "nguoihoc",
    "loai": "ontap",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Chuẩn GDPT 2018",
    "maTranDapAn": "Phiếu ôn tập & đáp án"
  },
  {
    "ma": "TH2-TNXH-08",
    "tieuDe": "Giáo án (CV 2345) Tự nhiên và Xã hội 2 — Bộ sách Chân trời sáng tạo",
    "moTa": "Kế hoạch bài dạy TN&XH 2 bám sát hướng dẫn 2345, hướng dẫn học sinh tìm hiểu về gia đình, nhà trường, thực vật và động vật quanh em.",
    "mon": "Tự nhiên và Xã hội",
    "khoi": "Lớp 2",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Kèm phiếu khảo sát thực hành"
  },
  {
    "ma": "TH3-TOAN-09",
    "tieuDe": "Giáo án (CV 2345) Toán 3 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Soạn chi tiết theo CV 2345 các mạch kiến thức: Số học trong phạm vi 100.000, Hình học và đo lường, Một số yếu tố thống kê và xác suất.",
    "mon": "Toán",
    "khoi": "Lớp 3",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Kèm bài tập nâng cao"
  },
  {
    "ma": "TH3-TV-10",
    "tieuDe": "Bộ đề kiểm tra định kỳ Tiếng Việt 3 theo Thông tư 27 (Bộ sách Cánh Diều)",
    "moTa": "Bộ đề kiểm tra định kỳ Tiếng Việt 3 gồm Đọc hiểu (văn bản ngoài SGK) và Luyện viết đoạn văn, có ma trận đề thi và barem điểm chấm chi tiết.",
    "mon": "Tiếng Việt",
    "khoi": "Lớp 3",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Ma trận & barem điểm chấm"
  },
  {
    "ma": "TH3-ANH-11",
    "tieuDe": "Bộ đề kiểm tra định kỳ Tiếng Anh 3 theo cấu trúc Thông tư 27 (Global Success)",
    "moTa": "Hệ thống đề thi giữa kỳ, học kỳ 1 và 2 môn Tiếng Anh 3 thiết kế 4 kỹ năng Nghe - Nói - Đọc - Viết có đáp án và bản đặc tả năng lực.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 3",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Bản đặc tả & audio file"
  },
  {
    "ma": "TH3-TNXH-12",
    "tieuDe": "Kế hoạch bài dạy (CV 2345) Tự nhiên và Xã hội 3 — Bộ sách Cánh Diều",
    "moTa": "Giáo án TN&XH 3 theo hướng tiếp cận năng lực giải quyết vấn đề, chuẩn bị chu đáo phiếu quan sát và hướng dẫn hoạt động nhóm cho học sinh.",
    "mon": "Tự nhiên và Xã hội",
    "khoi": "Lớp 3",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Phiếu thảo luận nhóm Word"
  },
  {
    "ma": "TH4-TOAN-13",
    "tieuDe": "Bộ đề kiểm tra định kỳ Toán 4 theo Thông tư 27 (Bộ sách Kết nối tri thức)",
    "moTa": "Hệ thống đề thi giữa kỳ và cuối năm Toán 4 bám sát Thông tư 27 với 3 mức độ nhận thức, có bản đặc tả ma trận đề thi và hướng dẫn chấm.",
    "mon": "Toán",
    "khoi": "Lớp 4",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Bản đặc tả & hướng dẫn chấm"
  },
  {
    "ma": "TH4-TV-14",
    "tieuDe": "Giáo án (CV 2345) Tiếng Việt 4 — Bộ sách Chân trời sáng tạo",
    "moTa": "Kế hoạch bài dạy Tiếng Việt 4 trọn bộ theo CV 2345, định hướng rèn kỹ năng viết bài văn miêu tả và rèn luyện từ và câu theo phương pháp mới.",
    "mon": "Tiếng Việt",
    "khoi": "Lớp 4",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Kèm dàn ý văn mẫu Word"
  },
  {
    "ma": "TH4-ANH-15",
    "tieuDe": "Đề cương ôn tập & Bộ đề kiểm tra Tiếng Anh 4 (Bộ sách Cánh Diều)",
    "moTa": "Tài liệu ôn tập tổng hợp ngữ pháp, từ vựng theo chủ đề và bộ đề kiểm tra định kỳ Tiếng Anh 4 có bảng phân tích ma trận kỹ năng.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 4",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "ontap",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Ma trận & đề cương ôn tập"
  },
  {
    "ma": "TH4-KH-16",
    "tieuDe": "Giáo án (CV 2345) Khoa học 4 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Kế hoạch dạy học môn Khoa học 4 theo CV 2345, thiết kế phiếu thí nghiệm khoa học, hướng dẫn học sinh tìm hiểu về chất, năng lượng và sinh vật.",
    "mon": "Khoa học",
    "khoi": "Lớp 4",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "https://drive.google.com/file/d/1dFGTOA1ybIrAeYKdqWFphMzyRWnL8N1G/view?usp=sharing",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Phiếu thí nghiệm trực quan"
  },
  {
    "ma": "TH4-LS&DL-17",
    "tieuDe": "Bộ đề kiểm tra định kỳ Lịch sử và Địa lý 4 có ma trận (Bộ sách Cánh Diều)",
    "moTa": "Bộ đề kiểm tra định kỳ môn Lịch sử và Địa lý 4 gồm trắc nghiệm và tự luận có bản đặc tả ma trận câu hỏi bám sát chuẩn kiến thức kỹ năng.",
    "mon": "Lịch sử và Địa lý",
    "khoi": "Lớp 4",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Bản đặc tả & đáp án chi tiết"
  },
  {
    "ma": "TH5-TOAN-18",
    "tieuDe": "Giáo án (CV 2345) Toán 5 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Kế hoạch bài dạy môn Toán 5 chuẩn CV 2345, trọng tâm kiến thức phân số, số thập phân, hình học không gian và các bài toán chuyển động đều.",
    "mon": "Toán",
    "khoi": "Lớp 5",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Chuyên đề phân dạng bài toán"
  },
  {
    "ma": "TH5-TV-19",
    "tieuDe": "Bộ đề kiểm tra định kỳ Tiếng Việt 5 theo Thông tư 27 (Bộ sách Cánh Diều)",
    "moTa": "Tuyển tập đề kiểm tra giữa kỳ 1, kỳ 2 và đề khảo sát chất lượng cuối năm Tiếng Việt 5 có ma trận và barem chấm chi tiết phần làm văn.",
    "mon": "Tiếng Việt",
    "khoi": "Lớp 5",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Ma trận & barem chấm văn"
  },
  {
    "ma": "TH5-ANH-20",
    "tieuDe": "Bộ đề kiểm tra định kỳ & Đề thi vào 6 Tiếng Anh 5 (Global Success)",
    "moTa": "Bộ đề kiểm tra định kỳ môn Tiếng Anh 5 và đề ôn tập khảo sát đầu vào lớp 6 chất lượng cao có đáp án và file nghe chuẩn.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 5",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Đề thi thử & audio nghe"
  },
  {
    "ma": "TH5-KH-21",
    "tieuDe": "Giáo án (CV 2345) Khoa học 5 — Bộ sách Chân trời sáng tạo",
    "moTa": "Kế hoạch bài dạy môn Khoa học 5 chuẩn 2345, thiết kế bài giảng gắn liền thực tiễn: sinh sản ở thực vật và động vật, bảo vệ môi trường.",
    "mon": "Khoa học",
    "khoi": "Lớp 5",
    "capHoc": "Tiểu học",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Giáo án (CV 2345)",
    "maTranDapAn": "Phiếu học tập nghiên cứu"
  },
  {
    "ma": "TH5-LS&DL-22",
    "tieuDe": "Bộ đề kiểm tra định kỳ Lịch sử và Địa lý 5 có ma trận (Bộ sách KNTT)",
    "moTa": "Đề kiểm tra định kỳ Lịch sử - Địa lý 5 theo Thông tư 27, đánh giá hiểu biết địa lý các châu lục và các mốc lịch sử hào hùng của dân tộc.",
    "mon": "Lịch sử và Địa lý",
    "khoi": "Lớp 5",
    "capHoc": "Tiểu học",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Chuẩn Thông tư 27",
    "maTranDapAn": "Ma trận câu hỏi 3 mức độ"
  },
  {
    "ma": "THCS6-TOAN-23",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Toán 6 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Giáo án Toán 6 trọn bộ cả năm theo Công văn 5512/BGDĐT-GDTrH: Số tự nhiên, Số nguyên, Phân số, Hình học trực quan và Thống kê xác suất.",
    "mon": "Toán",
    "khoi": "Lớp 6",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Kèm phiếu bài tập 5512"
  },
  {
    "ma": "THCS6-VAN-24",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Ngữ văn 6 — Bộ sách Cánh Diều (Đầy đủ cả năm)",
    "moTa": "Kế hoạch bài dạy Ngữ văn 6 soạn theo cấu trúc 5512, hướng dẫn dạy đọc hiểu theo thể loại truyện đồng thoại, thơ lục bát và viết bài tự sự.",
    "mon": "Ngữ văn",
    "khoi": "Lớp 6",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu học tập thể loại"
  },
  {
    "ma": "THCS6-ANH-25",
    "tieuDe": "Bộ đề kiểm tra định kỳ Tiếng Anh 6 theo cấu trúc mới có bảng đặc tả",
    "moTa": "Đề kiểm tra giữa kỳ 1, kỳ 2 và cuối học kỳ môn Tiếng Anh 6 theo hướng tiếp cận năng lực, có ma trận câu hỏi và file nghe audio.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 6",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Bảng đặc tả & audio file"
  },
  {
    "ma": "THCS6-KHTN-26",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Khoa học tự nhiên 6 — Bộ Chân trời sáng tạo",
    "moTa": "Giáo án KHTN 6 tích hợp Vật lý, Hóa học, Sinh học theo chuẩn 5512, thiết kế chi tiết hoạt động khởi động, hình thành kiến thức và luyện tập.",
    "mon": "Khoa học Tự nhiên",
    "khoi": "Lớp 6",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu thí nghiệm tích hợp"
  },
  {
    "ma": "THCS6-LS&DL-27",
    "tieuDe": "Bộ đề kiểm tra định kỳ Lịch sử và Địa lý 6 có ma trận (Bộ sách Cánh Diều)",
    "moTa": "Đề kiểm tra đánh giá định kỳ phân môn Lịch sử và Địa lý 6 theo ma trận công văn chuyên môn, kết hợp câu hỏi trắc nghiệm khách quan và tự luận.",
    "mon": "Lịch sử và Địa lý",
    "khoi": "Lớp 6",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Ma trận & barem chấm"
  },
  {
    "ma": "THCS7-TOAN-28",
    "tieuDe": "Bộ đề kiểm tra định kỳ Toán 7 theo cấu trúc mới (Trắc nghiệm Đúng/Sai & Trả lời ngắn)",
    "moTa": "Đề kiểm tra định kỳ môn Toán lớp 7 theo định dạng mới của Bộ GD&ĐT gồm trắc nghiệm 4 lựa chọn, trắc nghiệm đúng sai và tự luận có ma trận chi tiết.",
    "mon": "Toán",
    "khoi": "Lớp 7",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & lời giải"
  },
  {
    "ma": "THCS7-VAN-29",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Ngữ văn 7 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Giáo án Ngữ văn 7 soạn chuẩn 5512 định hướng phát triển năng lực, tập trung vào kỹ năng đọc hiểu văn bản nghị luận, thơ 4 chữ, 5 chữ và viết bài văn biểu cảm.",
    "mon": "Ngữ văn",
    "khoi": "Lớp 7",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu rèn kỹ năng viết"
  },
  {
    "ma": "THCS7-ANH-30",
    "tieuDe": "Đề cương ôn tập & Bộ đề kiểm tra định kỳ Tiếng Anh 7 (Global Success)",
    "moTa": "Tài liệu ôn tập tổng hợp ngữ pháp theo Unit và bộ đề kiểm tra giữa kỳ, học kỳ Tiếng Anh 7 có ma trận và file nghe audio.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 7",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "ontap",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Ma trận & đề thi kèm audio"
  },
  {
    "ma": "THCS7-KHTN-31",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Khoa học tự nhiên 7 — Bộ sách Cánh Diều",
    "moTa": "Kế hoạch bài dạy KHTN 7 theo cấu trúc 5512: các chủ đề Nguyên tử, Bảng tuần hoàn, Tốc độ, Âm thanh, Ánh sáng và Trao đổi chất ở sinh vật.",
    "mon": "Khoa học Tự nhiên",
    "khoi": "Lớp 7",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu học tập 4 hoạt động"
  },
  {
    "ma": "THCS7-LS&DL-32",
    "tieuDe": "Bộ đề kiểm tra định kỳ Lịch sử và Địa lý 7 có ma trận (Chân trời sáng tạo)",
    "moTa": "Bộ đề kiểm tra định kỳ Lịch sử và Địa lý 7 bám sát công văn chuyên môn, kiểm tra kiến thức lịch sử phong kiến châu Âu và địa lý các châu lục.",
    "mon": "Lịch sử và Địa lý",
    "khoi": "Lớp 7",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Ma trận & bản đặc tả"
  },
  {
    "ma": "THCS8-TOAN-33",
    "tieuDe": "Bộ đề kiểm tra định kỳ Toán 8 theo cấu trúc mới (Bộ sách Cánh Diều)",
    "moTa": "Hệ thống đề kiểm tra đánh giá năng lực Toán lớp 8 gồm trắc nghiệm nhiều lựa chọn, đúng sai và tự luận phân loại học sinh có đầy đủ ma trận.",
    "mon": "Toán",
    "khoi": "Lớp 8",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & đáp án"
  },
  {
    "ma": "THCS8-VAN-34",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Ngữ văn 8 — Bộ sách Chân trời sáng tạo",
    "moTa": "Kế hoạch bài dạy môn Ngữ văn 8 soạn theo hướng dẫn 5512, tích hợp đọc hiểu văn học hiện thực, thơ tự do và rèn kỹ năng viết bài văn nghị luận xã hội.",
    "mon": "Ngữ văn",
    "khoi": "Lớp 8",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phụ lục dàn ý văn mẫu"
  },
  {
    "ma": "THCS8-ANH-35",
    "tieuDe": "Bộ đề kiểm tra định kỳ Tiếng Anh 8 theo cấu trúc mới có bảng đặc tả ma trận",
    "moTa": "Hệ thống đề thi giữa kỳ, học kỳ 1 và học kỳ 2 môn Tiếng Anh 8 bám sát chương trình GDPT 2018, có ma trận và file audio chuẩn.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 8",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Bản đặc tả & audio file"
  },
  {
    "ma": "THCS8-KHTN-36",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Khoa học tự nhiên 8 — Bộ Kết nối tri thức",
    "moTa": "Giáo án KHTN 8 soạn chuẩn 5512: Phản ứng hóa học, Acid - Base, Áp suất, Lực đẩy Archimedes, Cơ thể người và Hệ sinh thái.",
    "mon": "Khoa học Tự nhiên",
    "khoi": "Lớp 8",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu thực hành thí nghiệm"
  },
  {
    "ma": "THCS8-LS&DL-37",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Lịch sử và Địa lý 8 — Bộ sách Cánh Diều",
    "moTa": "Kế hoạch bài dạy phân môn Lịch sử và Địa lý 8 theo CV 5512: Cách mạng tư sản, Lịch sử Việt Nam thời Nguyễn, Địa lý tự nhiên và khoáng sản VN.",
    "mon": "Lịch sử và Địa lý",
    "khoi": "Lớp 8",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Lược đồ & sơ đồ tư duy"
  },
  {
    "ma": "THCS9-TOAN-38",
    "tieuDe": "Tuyển tập đề kiểm tra & Đề thi vào 10 Toán 9 cấu trúc mới (Có ma trận)",
    "moTa": "Bộ đề kiểm tra định kỳ Toán 9 và 20 đề ôn thi tuyển sinh vào lớp 10 theo định dạng cấu trúc đánh giá năng lực mới của các Sở GD&ĐT.",
    "mon": "Toán",
    "khoi": "Lớp 9",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc định dạng mới",
    "maTranDapAn": "Bản đặc tả & lời giải chi tiết"
  },
  {
    "ma": "THCS9-VAN-39",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Ngữ văn 9 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Giáo án Ngữ văn 9 trọn bộ cả năm theo CV 5512, tích hợp chuyên đề ôn thi vào lớp 10: Nghị luận xã hội và Nghị luận văn học theo chương trình mới.",
    "mon": "Ngữ văn",
    "khoi": "Lớp 9",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Chuyên đề ôn thi vào 10"
  },
  {
    "ma": "THCS9-ANH-40",
    "tieuDe": "Bộ đề thi thử tuyển sinh vào lớp 10 môn Tiếng Anh theo cấu trúc mới",
    "moTa": "Bộ đề ôn thi tuyển sinh vào 10 Tiếng Anh bám sát cấu trúc mới các tỉnh thành, bao gồm trắc nghiệm ngữ âm, từ vựng, đọc hiểu và viết lại câu.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 9",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đáp án & giải thích chi tiết"
  },
  {
    "ma": "THCS9-KHTN-41",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Khoa học tự nhiên 9 — Bộ Chân trời sáng tạo",
    "moTa": "Kế hoạch bài dạy KHTN 9 soạn chuẩn 5512: Năng lượng, Kim loại, Hợp chất hữu cơ, Di truyền học và Tiến hóa chuẩn bị chuyển cấp THPT.",
    "mon": "Khoa học Tự nhiên",
    "khoi": "Lớp 9",
    "capHoc": "THCS",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu học tập phân loại"
  },
  {
    "ma": "THCS9-LS&DL-42",
    "tieuDe": "Bộ đề kiểm tra định kỳ Lịch sử và Địa lý 9 có ma trận (Bộ sách KNTT)",
    "moTa": "Đề kiểm tra giữa kỳ và cuối năm Lịch sử - Địa lý 9 theo ma trận chuẩn, bao gồm Lịch sử Việt Nam hiện đại và Địa lý kinh tế các vùng.",
    "mon": "Lịch sử và Địa lý",
    "khoi": "Lớp 9",
    "capHoc": "THCS",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & đáp án"
  },
  {
    "ma": "THPT10-TOAN-43",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Toán 10 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Giáo án Toán 10 soạn chuẩn 5512 trọn bộ: Mệnh đề, Tập hợp, Hàm số bậc hai, Vector, Phương pháp tọa độ và Thống kê xác suất.",
    "mon": "Toán",
    "khoi": "Lớp 10",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Kèm chuyên đề học tập"
  },
  {
    "ma": "THPT10-VAN-44",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Ngữ văn 10 — Bộ sách Cánh Diều",
    "moTa": "Kế hoạch bài dạy Ngữ văn 10 theo hướng dẫn 5512: Thần thoại, Sử thi, Thơ Đường luật, Chèo, Tuồng và Rèn luyện kỹ năng viết bài nghị luận.",
    "mon": "Ngữ văn",
    "khoi": "Lớp 10",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu đọc hiểu theo thể loại"
  },
  {
    "ma": "THPT10-ANH-45",
    "tieuDe": "Bộ đề kiểm tra định kỳ Tiếng Anh 10 theo cấu trúc mới có ma trận (Global Success)",
    "moTa": "Đề kiểm tra giữa kỳ 1, kỳ 2 và cuối năm môn Tiếng Anh 10 bám sát định dạng cấu trúc trắc nghiệm mới của Bộ GD&ĐT kèm file nghe chất lượng cao.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 10",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Bảng đặc tả & audio file"
  },
  {
    "ma": "THPT10-LY-46",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Vật lý 10 — Bộ sách Kết nối tri thức",
    "moTa": "Giáo án Vật lý 10 trọn bộ theo CV 5512: Động học, Động lực học, Năng lượng, Động lượng, Chuyển động tròn đều và Biến dạng của vật rắn.",
    "mon": "Vật lý",
    "khoi": "Lớp 10",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu hoạt động thí nghiệm"
  },
  {
    "ma": "THPT10-HOA-47",
    "tieuDe": "Bộ đề kiểm tra định kỳ Hóa học 10 theo cấu trúc mới (Trắc nghiệm Đúng/Sai, trả lời ngắn)",
    "moTa": "Bộ đề kiểm tra định kỳ Hóa học 10 biên soạn theo định dạng mới của Bộ GD&ĐT: Cấu tạo nguyên tử, Bảng tuần hoàn, Liên kết hóa học và Phản ứng oxi hóa - khử.",
    "mon": "Hóa học",
    "khoi": "Lớp 10",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & lời giải"
  },
  {
    "ma": "THPT10-SINH-48",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Sinh học 10 — Bộ sách Chân trời sáng tạo",
    "moTa": "Giáo án Sinh học 10 bám sát CV 5512: Sinh học tế bào, Vi sinh vật và Virus, thiết kế bài giảng phát huy năng lực tự học và tư duy khoa học.",
    "mon": "Sinh học",
    "khoi": "Lớp 10",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu quan sát tiêu bản"
  },
  {
    "ma": "THPT10-SU-49",
    "tieuDe": "Bộ đề kiểm tra định kỳ Lịch sử 10 theo cấu trúc mới (Bộ sách KNTT)",
    "moTa": "Đề kiểm tra định kỳ môn Lịch sử 10 theo cấu trúc mới gồm trắc nghiệm 4 lựa chọn và trắc nghiệm Đúng/Sai có ma trận và đáp án chi tiết.",
    "mon": "Lịch sử",
    "khoi": "Lớp 10",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Ma trận & câu hỏi Đúng/Sai"
  },
  {
    "ma": "THPT10-DIA-50",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Địa lý 10 — Bộ sách Cánh Diều",
    "moTa": "Kế hoạch bài dạy Địa lý 10 theo chuẩn 5512: Bản đồ học, Địa lý tự nhiên đại cương (Khí quyển, Thủy quyển, Thổ nhưỡng quyển và Sinh quyển).",
    "mon": "Địa lý",
    "khoi": "Lớp 10",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Lược đồ & bài tập thực hành"
  },
  {
    "ma": "THPT11-TOAN-51",
    "tieuDe": "Bộ đề kiểm tra định kỳ Toán 11 theo cấu trúc mới (Trắc nghiệm Đúng/Sai & Điền số)",
    "moTa": "Bộ đề kiểm tra Toán 11 cấu trúc mới: Lượng giác, Dãy số, Cấp số cộng - Cấp số nhân, Giới hạn, Đạo hàm và Hình học không gian có ma trận chi tiết.",
    "mon": "Toán",
    "khoi": "Lớp 11",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & lời giải"
  },
  {
    "ma": "THPT11-VAN-52",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Ngữ văn 11 — Bộ sách Chân trời sáng tạo",
    "moTa": "Kế hoạch bài dạy Ngữ văn 11 theo CV 5512: Thơ lãng mạn, Thơ mới, Truyện ngắn hiện thực phê phán, Bi kịch và Rèn luyện viết bài văn nghị luận xã hội.",
    "mon": "Ngữ văn",
    "khoi": "Lớp 11",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phụ lục văn bản ngoài SGK"
  },
  {
    "ma": "THPT11-ANH-53",
    "tieuDe": "Bộ đề kiểm tra định kỳ Tiếng Anh 11 theo cấu trúc mới (Bộ sách Global Success)",
    "moTa": "Đề kiểm tra giữa kỳ, cuối kỳ Tiếng Anh 11 biên soạn theo định dạng đánh giá năng lực của Bộ GD&ĐT có đáp án, transcript và file nghe audio.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 11",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Bản đặc tả & audio transcript"
  },
  {
    "ma": "THPT11-LY-54",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Vật lý 11 — Bộ sách Kết nối tri thức với cuộc sống",
    "moTa": "Giáo án Vật lý 11 trọn bộ cả năm các chuyên đề Dao động, Sóng, Điện trường và Dòng điện không đổi bám sát hướng dẫn 5512 của Bộ GD&ĐT.",
    "mon": "Vật lý",
    "khoi": "Lớp 11",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu học tập 100% Word"
  },
  {
    "ma": "THPT11-HOA-55",
    "tieuDe": "Bộ đề kiểm tra định kỳ Hóa học 11 theo cấu trúc mới (Trắc nghiệm Đúng/Sai, trả lời ngắn)",
    "moTa": "Ngân hàng đề kiểm tra Hóa học 11 phần Cân bằng hóa học, Nitrogen - Sulfur, Hợp chất hữu cơ và Hydrocarbon có ma trận và bản đặc tả chi tiết.",
    "mon": "Hóa học",
    "khoi": "Lớp 11",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & lời giải"
  },
  {
    "ma": "THPT11-SINH-56",
    "tieuDe": "Ngân hàng câu hỏi trắc nghiệm Đúng/Sai Sinh học 11 phân dạng bám sát CV 5512",
    "moTa": "Hệ thống câu hỏi trắc nghiệm Sinh học 11 phần Sinh lý thực vật và động vật (Trao đổi chất, Cảm ứng, Sinh trưởng và Sinh sản) có đáp án chi tiết.",
    "mon": "Sinh học",
    "khoi": "Lớp 11",
    "capHoc": "THPT",
    "doiTuong": "nguoihoc",
    "loai": "chuyende",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Lời giải chi tiết 100% Word"
  },
  {
    "ma": "THPT11-SU-57",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Lịch sử 11 — Bộ sách Cánh Diều",
    "moTa": "Giáo án Lịch sử 11 theo chuẩn 5512: Cách mạng tư sản, Quá trình mở rộng xâm lược thuộc địa, Chiến tranh bảo vệ Tổ quốc và công cuộc Đổi mới ở VN.",
    "mon": "Lịch sử",
    "khoi": "Lớp 11",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Tư liệu lịch sử & câu hỏi"
  },
  {
    "ma": "THPT11-DIA-58",
    "tieuDe": "Bộ đề kiểm tra định kỳ Địa lý 11 theo cấu trúc mới có ma trận (Bộ sách KNTT)",
    "moTa": "Đề kiểm tra môn Địa lý 11 theo định dạng trắc nghiệm Đúng/Sai và nhiều lựa chọn: Kinh tế xã hội thế giới, Hoa Kỳ, Liên bang Nga, Nhật Bản, Trung Quốc.",
    "mon": "Địa lý",
    "khoi": "Lớp 11",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & đáp án"
  },
  {
    "ma": "THPT12-TOAN-59",
    "tieuDe": "Bộ đề kiểm tra định kỳ & Đề thi thử Tốt nghiệp THPT Toán 12 cấu trúc mới",
    "moTa": "Tuyển tập 25 đề thi chuẩn định dạng mới của Bộ GD&ĐT (Phần 1: Trắc nghiệm 4 lựa chọn, Phần 2: Trắc nghiệm Đúng/Sai, Phần 3: Trả lời ngắn điền số).",
    "mon": "Toán",
    "khoi": "Lớp 12",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc định dạng mới 2025",
    "maTranDapAn": "Đầy đủ ma trận, đặc tả & giải"
  },
  {
    "ma": "THPT12-VAN-60",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Ngữ văn 12 — Bộ sách Chân trời sáng tạo",
    "moTa": "Giáo án Ngữ văn 12 soạn theo hướng tiếp cận thể loại và phát triển năng lực đọc hiểu văn bản hiện đại, rèn kỹ năng viết bài văn nghị luận xã hội/văn học.",
    "mon": "Ngữ văn",
    "khoi": "Lớp 12",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phụ lục đề thi thử TN THPT"
  },
  {
    "ma": "THPT12-ANH-61",
    "tieuDe": "Bộ đề kiểm tra định kỳ & Ôn thi tốt nghiệp THPT Tiếng Anh 12 (Global Success)",
    "moTa": "Tuyển tập đề kiểm tra giữa kỳ, học kỳ và 30 đề thi thử chuẩn cấu trúc mới của Bộ GD&ĐT có đáp án chi tiết và giải thích ngữ pháp cặn kẽ.",
    "mon": "Tiếng Anh",
    "khoi": "Lớp 12",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Giải thích chi tiết 100%"
  },
  {
    "ma": "THPT12-LY-62",
    "tieuDe": "Ngân hàng câu hỏi trắc nghiệm Đúng/Sai & Trả lời ngắn Vật lý 12 — Bộ sách Cánh Diều",
    "moTa": "Tài liệu ôn tập phân dạng Vật lý nhiệt, Khí lý tưởng, Từ trường và Vật lý hạt nhân bám sát cấu trúc đề thi Tốt nghiệp THPT mới nhất.",
    "mon": "Vật lý",
    "khoi": "Lớp 12",
    "capHoc": "THPT",
    "doiTuong": "nguoihoc",
    "loai": "chuyende",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Phương pháp giải nhanh & đáp án"
  },
  {
    "ma": "THPT12-HOA-63",
    "tieuDe": "Bộ đề kiểm tra định kỳ Hóa học 12 theo cấu trúc mới (Trắc nghiệm Đúng/Sai, trả lời ngắn)",
    "moTa": "Hệ thống đề kiểm tra định kỳ Hóa học 12 phần Este-Lipit, Carbohydrate, Hợp chất chứa Nitơ, Polime và Kim loại chuyển tiếp đầy đủ ma trận.",
    "mon": "Hóa học",
    "khoi": "Lớp 12",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & lời giải"
  },
  {
    "ma": "THPT12-SINH-64",
    "tieuDe": "Kế hoạch bài dạy (CV 5512) Sinh học 12 — Bộ sách Cánh Diều",
    "moTa": "Giáo án Sinh học 12 trọn bộ phần Di truyền học phân tử, Tiến hóa và Sinh thái học thiết kế theo 4 bước bài học CV 5512 phát triển phẩm chất học sinh.",
    "mon": "Sinh học",
    "khoi": "Lớp 12",
    "capHoc": "THPT",
    "doiTuong": "giaovien",
    "loai": "giaoan",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Cánh Diều",
    "chuanCV": "Kế hoạch bài dạy (CV 5512)",
    "maTranDapAn": "Phiếu học tập Word chỉnh sửa"
  },
  {
    "ma": "THPT12-SU-65",
    "tieuDe": "Bộ đề kiểm tra định kỳ & Đề thi thử Tốt nghiệp THPT Lịch sử 12 cấu trúc mới",
    "moTa": "Đề kiểm tra Lịch sử 12 gồm trắc nghiệm nhiều phương án và câu hỏi trắc nghiệm Đúng/Sai có ma trận theo chuẩn định dạng Bộ GD&ĐT.",
    "mon": "Lịch sử",
    "khoi": "Lớp 12",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Kết nối tri thức",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & đáp án"
  },
  {
    "ma": "THPT12-DIA-66",
    "tieuDe": "Bộ đề kiểm tra định kỳ Địa lý 12 theo cấu trúc mới có ma trận và bảng đặc tả",
    "moTa": "Đề kiểm tra Địa lý 12 phần Địa lý tự nhiên, Dân cư và các ngành kinh tế Việt Nam chuẩn cấu trúc trắc nghiệm mới có bảng số liệu và biểu đồ.",
    "mon": "Địa lý",
    "khoi": "Lớp 12",
    "capHoc": "THPT",
    "doiTuong": "ca_hai",
    "loai": "dekiemtra",
    "dinhDang": "DOCX",
    "linkDemo": "",
    "boSach": "Chân trời sáng tạo",
    "chuanCV": "Cấu trúc trắc nghiệm mới",
    "maTranDapAn": "Đầy đủ ma trận & đáp án"
  }
];

// ─── MA TRẬN MÔN HỌC THEO LỚP & CẤP ───
const MON_THEO_LOP = {
  'Lớp 1': ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Tự nhiên và Xã hội'],
  'Lớp 2': ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Tự nhiên và Xã hội'],
  'Lớp 3': ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Tự nhiên và Xã hội'],
  'Lớp 4': ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Khoa học', 'Lịch sử và Địa lý'],
  'Lớp 5': ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Khoa học', 'Lịch sử và Địa lý'],
  'Lớp 6': ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Khoa học Tự nhiên', 'Lịch sử và Địa lý'],
  'Lớp 7': ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Khoa học Tự nhiên', 'Lịch sử và Địa lý'],
  'Lớp 8': ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Khoa học Tự nhiên', 'Lịch sử và Địa lý'],
  'Lớp 9': ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Khoa học Tự nhiên', 'Lịch sử và Địa lý'],
  'Lớp 10': ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Vật lý', 'Hóa học', 'Sinh học', 'Lịch sử', 'Địa lý'],
  'Lớp 11': ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Vật lý', 'Hóa học', 'Sinh học', 'Lịch sử', 'Địa lý'],
  'Lớp 12': ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Vật lý', 'Hóa học', 'Sinh học', 'Lịch sử', 'Địa lý']
};

const MON_THEO_CAP = {
  'Tiểu học': ['Toán', 'Tiếng Việt', 'Tiếng Anh', 'Tự nhiên và Xã hội', 'Khoa học', 'Lịch sử và Địa lý'],
  'THCS': ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Khoa học Tự nhiên', 'Lịch sử và Địa lý'],
  'THPT': ['Toán', 'Ngữ văn', 'Tiếng Anh', 'Vật lý', 'Hóa học', 'Sinh học', 'Lịch sử', 'Địa lý']
};

const KHOI_THEO_CAP = {
  'Tiểu học': ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4', 'Lớp 5'],
  'THCS': ['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9'],
  'THPT': ['Lớp 10', 'Lớp 11', 'Lớp 12']
};

// ─── CẤU HÌNH HỆ THỐNG & NGUỒN DỮ LIỆU (DATA ACCESS LAYER) ───
const CONFIG = {
  ZALO_PHONE: '0926999869',
  ZALO_PHONE_DISPLAY: '0926.999.869',
  ZALO_LINK: 'https://zalo.me/0926999869',
  SUPPORT_HOURS: '8:00 – 21:00 (Thứ 2 – Chủ nhật)',
  // DATA ADAPTER:
  // - Chế độ 'verified_local': Sử dụng kho 66 học liệu chuẩn đã kiểm duyệt, an toàn 100%, không rò rỉ dữ liệu nội bộ.
  // - Ngưng hoàn toàn việc gọi trực tiếp endpoint Google Sheets gviz/tq từ trình duyệt để bảo vệ thông tin quản trị.
  DATA_SOURCE: 'verified_local',
  API_ENDPOINT: '/api/documents'
};

// ─── TRẠNG THÁI BỘ LỌC TOÀN CỤC ───
let filterState = {
  cap: '',
  khoi: new Set(),
  mon: new Set(),
  doiTuong: 'all',
  loai: 'all',
  tuKhoa: '',
  sort: 'default',
  viewMode: 'grid'
};

// ─── XỬ LÝ TIẾNG VIỆT KHÔNG DẤU ───
function boDao(s) {
  if (!s) return '';
  s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  s = s.replace(/[đĐ]/g, (m) => m === 'đ' ? 'd' : 'D');
  return s.toLowerCase().trim();
}

// ─── ESCAPE HTML AN TOÀN ───
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─── TOAST THÔNG BÁO ───
function showToast(msg) {
  const toast = document.getElementById('toast-notify');
  const txt = document.getElementById('toast-text');
  if (!toast || !txt) return;
  txt.textContent = msg;
  toast.classList.add('toast--show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('toast--show');
  }, 3000);
}

function copySoZalo() {
  navigator.clipboard.writeText(CONFIG.ZALO_PHONE).then(() => {
    showToast('Đã sao chép số Zalo: ' + CONFIG.ZALO_PHONE_DISPLAY);
  }).catch(() => {
    showToast('Số Zalo: ' + CONFIG.ZALO_PHONE_DISPLAY);
  });
}

// ─── TỪ ĐIỂN TÌM KIẾM ĐỒNG NGHĨA & VIẾT TẮT CHUẨN NGỮ CẢNH GIÁO DỤC ───
const SEARCH_ALIASES = {
  'khtn': ['Khoa học Tự nhiên', 'Khoa học'],
  'khxh': ['Lịch sử và Địa lý'],
  'van': ['Ngữ văn', 'Tiếng Việt'],
  'nguvan': ['Ngữ văn'],
  'tiengviet': ['Tiếng Việt'],
  'ly': ['Vật lý'],
  'vatly': ['Vật lý'],
  'vatli': ['Vật lý'],
  'su': ['Lịch sử'],
  'lichsu': ['Lịch sử'],
  'dia': ['Địa lý'],
  'diali': ['Địa lý'],
  'sinh': ['Sinh học'],
  'sinhhoc': ['Sinh học'],
  'hoa': ['Hóa học'],
  'hoahoc': ['Hóa học'],
  'tin': ['Tin học'],
  'tinhoc': ['Tin học'],
  'anh': ['Tiếng Anh'],
  'tienganh': ['Tiếng Anh'],
  'toan': ['Toán'],
  'tnxh': ['Tự nhiên và Xã hội']
};

// ─── TÍNH TOÁN DANH SÁCH MÔN HỌC HỢP LỆ THEO LỰA CHỌN CẤP / KHỐI HIỆN TẠI ───
function getValidSubjects() {
  let validMon = new Set();
  if (filterState.khoi.size > 0) {
    filterState.khoi.forEach(k => {
      if (MON_THEO_LOP[k]) MON_THEO_LOP[k].forEach(m => validMon.add(m));
    });
    if (filterState.cap && MON_THEO_CAP[filterState.cap]) {
      const capValid = new Set(MON_THEO_CAP[filterState.cap]);
      validMon = new Set([...validMon].filter(m => capValid.has(m)));
    }
  } else if (filterState.cap && MON_THEO_CAP[filterState.cap]) {
    MON_THEO_CAP[filterState.cap].forEach(m => validMon.add(m));
  } else {
    Object.values(MON_THEO_CAP).forEach(arr => arr.forEach(m => validMon.add(m)));
  }
  return validMon;
}

// Loại bỏ những môn học không còn hợp lệ khi đổi cấp học hoặc khối lớp
function sanitizeSubjects() {
  const valid = getValidSubjects();
  filterState.mon = new Set([...filterState.mon].filter(m => valid.has(m)));
}

// ─── LỌC TÀI LIỆU CHUẨN MỰC (OR TRONG NHÓM, AND GIỮA CÁC NHÓM ĐIỀU KIỆN) ───
function filterDocuments() {
  let list = danhSach;

  // 1. Cấp học (AND với các nhóm khác)
  if (filterState.cap) {
    list = list.filter(d => d.capHoc === filterState.cap);
  }

  // 2. Khối lớp (OR giữa các lớp đang chọn, AND với cấp học)
  if (filterState.khoi.size > 0) {
    list = list.filter(d => filterState.khoi.has(d.khoi));
  }

  // 3. Môn học (OR giữa các môn đang chọn, AND với các nhóm khác)
  if (filterState.mon.size > 0) {
    list = list.filter(d => filterState.mon.has(d.mon));
  }

  // 4. Đối tượng sử dụng
  if (filterState.doiTuong && filterState.doiTuong !== 'all') {
    list = list.filter(d => d.doiTuong === filterState.doiTuong || d.doiTuong === 'ca_hai');
  }

  // 5. Loại tài liệu (Giáo án, Đề kiểm tra, Bài tập, Chuyên đề)
  if (filterState.loai && filterState.loai !== 'all') {
    list = list.filter(d => d.loai === filterState.loai);
  }

  // 6. Tìm kiếm thông minh tiếng Việt (hỗ trợ có dấu/không dấu, alias môn học, chống nhận nhầm số lớp)
  if (filterState.tuKhoa.trim()) {
    const rawTokens = boDao(filterState.tuKhoa).split(/\s+/).filter(Boolean);

    // Kiểm tra xem người dùng có gõ chỉ định rõ khối lớp không (ví dụ '6', 'lop 6', 'khoi 9', '12')
    let gradeToken = null;
    for (const t of rawTokens) {
      if (/^(?:1[0-2]|[1-9])$/.test(t)) {
        gradeToken = 'Lớp ' + t;
        break;
      }
    }

    const scoredResults = [];

    list.forEach(d => {
      // Nếu có số lớp rõ ràng trong truy vấn, tài liệu bắt buộc phải thuộc đúng lớp đó
      if (gradeToken && d.khoi !== gradeToken) {
        return;
      }

      const haystack = d.ma + ' ' + d.tieuDe + ' ' + d.moTa + ' ' + (d.boSach || '') + ' ' + (d.chuanCV || '');
      const dTokens = new Set(boDao(haystack).split(/\s+/).filter(Boolean));
      const tieuDeNorm = boDao(d.tieuDe);
      const monNorm = boDao(d.mon);
      let matches = true;
      let score = 0;

      for (const t of rawTokens) {
        if (/^(?:1[0-2]|[1-9])$/.test(t) && gradeToken) {
          score += 15;
          continue;
        }

        // Kiểm tra alias môn học theo ngữ cảnh (ví dụ 'ly' chỉ khớp 'Vật lý', không khớp 'Địa lý')
        if (SEARCH_ALIASES[t]) {
          const allowed = SEARCH_ALIASES[t];
          if (allowed.includes(d.mon)) {
            score += 30;
            continue;
          } else {
            matches = false;
            break;
          }
        }

        // Khớp trong tiêu đề
        if (tieuDeNorm.includes(t)) {
          score += 20;
        } else if (monNorm.includes(t)) {
          score += 15;
        } else if (dTokens.has(t)) {
          score += 8;
        } else if ([...dTokens].some(tok => tok.includes(t) && t.length >= 3)) {
          score += 3;
        } else {
          matches = false;
          break;
        }
      }

      if (matches) {
        scoredResults.push({ doc: d, score: score });
      }
    });

    if (filterState.sort === 'default') {
      scoredResults.sort((a, b) => b.score - a.score);
      list = scoredResults.map(item => item.doc);
    } else {
      list = scoredResults.map(item => item.doc);
    }
  }

  // 7. Sắp xếp (Sort)
  if (filterState.sort === 'newest') {
    list = [...list].reverse();
  } else if (filterState.sort === 'az') {
    list = [...list].sort((a, b) => a.tieuDe.localeCompare(b.tieuDe, 'vi'));
  }

  return list;
}

// ─── TẠO BÌA SÁCH MINH HỌA PASTEL SANG TRỌNG ───
function renderDocCoverHTML(doc) {
  const isPink = ['Ngữ văn', 'Tiếng Việt', 'Lịch sử', 'Địa lý'].includes(doc.mon) || doc.khoi === 'Lớp 1' || doc.khoi === 'Lớp 8';
  const coverClass = isPink ? 'doc-card__thumb--pink' : 'doc-card__thumb--green';
  const badgeText = doc.dinhDang || 'DOCX';

  // Cắt ngắn tiêu đề cho bìa
  let shortTitle = doc.tieuDe;
  if (shortTitle.includes('—')) {
    shortTitle = shortTitle.split('—')[0].trim();
  }

  return `
    <div class="doc-card__thumb ${coverClass}">
      <span class="doc-card__badge-docx">${escapeHTML(badgeText)}</span>
      <div class="doc-card__cover-title">${escapeHTML(shortTitle)}</div>
      <div class="doc-card__cover-sub">${escapeHTML(doc.mon)} • ${escapeHTML(doc.khoi)}</div>
    </div>
  `;
}

// ─── RENDER CARD TÀI LIỆU TRÊN LƯỚI / DANH SÁCH ───
function renderCard(d, prefix = '') {
  const detailUrl = `${prefix}tai-lieu/?ma=${encodeURIComponent(d.ma)}`;
  const coverHTML = renderDocCoverHTML(d);

  return `
    <article class="doc-card" data-ma="${escapeHTML(d.ma)}">
      <a href="${detailUrl}">
        ${coverHTML}
      </a>
      <div class="doc-card__body">
        <h3 class="doc-card__title">
          <a href="${detailUrl}">${escapeHTML(d.tieuDe)}</a>
        </h3>
        <div class="doc-card__tags">
          <span class="tag tag--highlight">${escapeHTML(d.capHoc)}</span>
          <span class="tag">${escapeHTML(d.khoi)}</span>
          <span class="tag">${escapeHTML(d.mon)}</span>
        </div>
        <div class="doc-card__footer">
          <a href="${detailUrl}" class="doc-card__detail-link">
            Xem chi tiết <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

// ─── ĐIỀU HƯỚNG URL SYNC (2 CHIỀU) ───
function syncStateToURL() {
  const params = new URLSearchParams();
  if (filterState.cap) params.set('cap', filterState.cap);
  if (filterState.khoi.size > 0) params.set('khoi', Array.from(filterState.khoi).join(','));
  if (filterState.mon.size > 0) params.set('mon', Array.from(filterState.mon).join(','));
  if (filterState.doiTuong !== 'all') params.set('doituong', filterState.doiTuong);
  if (filterState.loai !== 'all') params.set('loai', filterState.loai);
  if (filterState.tuKhoa.trim()) params.set('q', filterState.tuKhoa.trim());
  if (filterState.sort !== 'default') params.set('sort', filterState.sort);

  const newQuery = params.toString();
  const currentPath = window.location.pathname;
  const newUrl = newQuery ? `${currentPath}?${newQuery}` : currentPath;
  window.history.replaceState({}, '', newUrl);
}

function loadStateFromURL() {
  const params = new URLSearchParams(window.location.search);
  const cap = params.get('cap') || '';
  const khoi = params.get('khoi') ? params.get('khoi').split(',').map(s => s.trim()).filter(Boolean) : [];
  const mon = params.get('mon') ? params.get('mon').split(',').map(s => s.trim()).filter(Boolean) : [];
  const doiTuong = params.get('doituong') || 'all';
  const loai = params.get('loai') || 'all';
  const q = params.get('q') || '';
  const sort = params.get('sort') || 'default';

  // Kiểm tra tính hợp lệ của tham số URL (ngăn ngừa tham số không hợp lệ phá hỏng bộ lọc)
  const validCaps = ['', 'Tiểu học', 'THCS', 'THPT'];
  filterState.cap = validCaps.includes(cap) ? cap : '';

  const allGrades = new Set(['Lớp 1','Lớp 2','Lớp 3','Lớp 4','Lớp 5','Lớp 6','Lớp 7','Lớp 8','Lớp 9','Lớp 10','Lớp 11','Lớp 12']);
  filterState.khoi = new Set(khoi.filter(k => allGrades.has(k)));

  const validMon = getValidSubjects();
  filterState.mon = new Set(mon.filter(m => validMon.has(m)));

  const validDoiTuong = ['all', 'giaovien', 'hocsinh'];
  filterState.doiTuong = validDoiTuong.includes(doiTuong) ? doiTuong : 'all';

  const validLoai = ['all', 'giaoan', 'dekiemtra', 'baitap', 'chuyende'];
  filterState.loai = validLoai.includes(loai) ? loai : 'all';

  filterState.tuKhoa = q.slice(0, 100);
  const validSort = ['default', 'newest', 'az'];
  filterState.sort = validSort.includes(sort) ? sort : 'default';
}

// ─── RENDER BỘ LỌC TẠI KHO TÀI LIỆU ───
function renderFilterControls() {
  // Đồng bộ Dropdown selects (trên Desktop Filter Bar)
  const selCap = document.getElementById('filter-select-cap');
  const selKhoi = document.getElementById('filter-select-khoi');
  const selMon = document.getElementById('filter-select-mon');
  const selDoiTuong = document.getElementById('filter-select-doituong');
  const selLoai = document.getElementById('filter-select-loai');
  const selSort = document.getElementById('filter-select-sort');

  if (selCap) selCap.value = filterState.cap;
  if (selDoiTuong) selDoiTuong.value = filterState.doiTuong;
  if (selLoai) selLoai.value = filterState.loai;
  if (selSort) selSort.value = filterState.sort;

  // Cập nhật options khối lớp theo cấp
  if (selKhoi) {
    let validGrades = ['Lớp 1','Lớp 2','Lớp 3','Lớp 4','Lớp 5','Lớp 6','Lớp 7','Lớp 8','Lớp 9','Lớp 10','Lớp 11','Lớp 12'];
    if (filterState.cap && KHOI_THEO_CAP[filterState.cap]) {
      validGrades = KHOI_THEO_CAP[filterState.cap];
    }
    selKhoi.innerHTML = '<option value="">Khối lớp (Tất cả)</option>' + validGrades.map(k => `
      <option value="${escapeHTML(k)}" ${filterState.khoi.has(k) ? 'selected' : ''}>${escapeHTML(k)}</option>
    `).join('');
  }

  // Cập nhật options môn học
  if (selMon) {
    const validMon = getValidSubjects();
    const monArr = Array.from(validMon);
    selMon.innerHTML = '<option value="">Môn học (Tất cả)</option>' + monArr.map(m => `
      <option value="${escapeHTML(m)}" ${filterState.mon.has(m) ? 'selected' : ''}>${escapeHTML(m)}</option>
    `).join('');
  }

  // Cập nhật chips trong Mobile Drawer
  renderDrawerChips();

  // Cập nhật Active Filter Pills
  renderActivePills();
}

// ─── RENDER CHIPS TRONG MOBILE DRAWER ───
function renderDrawerChips() {
  const mLevelFilter = document.getElementById('m-level-filter');
  const mGradeFilter = document.getElementById('m-grade-filter');
  const mSubjectFilter = document.getElementById('m-subject-filter');

  const capOptions = [
    { id: '', label: 'Tất cả cấp' },
    { id: 'Tiểu học', label: 'Tiểu học (1–5)' },
    { id: 'THCS', label: 'THCS (6–9)' },
    { id: 'THPT', label: 'THPT (10–12)' }
  ];

  if (mLevelFilter) {
    mLevelFilter.innerHTML = capOptions.map(o => `
      <button class="tag ${filterState.cap === o.id ? 'tag--highlight' : ''}" onclick="chonCapHoc('${o.id}')">
        ${escapeHTML(o.label)}
      </button>
    `).join('');
  }

  let validGrades = ['Lớp 1','Lớp 2','Lớp 3','Lớp 4','Lớp 5','Lớp 6','Lớp 7','Lớp 8','Lớp 9','Lớp 10','Lớp 11','Lớp 12'];
  if (filterState.cap && KHOI_THEO_CAP[filterState.cap]) {
    validGrades = KHOI_THEO_CAP[filterState.cap];
  }
  if (mGradeFilter) {
    mGradeFilter.innerHTML = validGrades.map(k => `
      <button class="tag ${filterState.khoi.has(k) ? 'tag--highlight' : ''}" onclick="toggleKhoi('${escapeHTML(k)}')">
        ${escapeHTML(k)}
      </button>
    `).join('');
  }

  const validMon = getValidSubjects();
  const monArr = Array.from(validMon);
  if (mSubjectFilter) {
    mSubjectFilter.innerHTML = monArr.map(m => `
      <button class="tag ${filterState.mon.has(m) ? 'tag--highlight' : ''}" onclick="toggleMon('${escapeHTML(m)}')">
        ${escapeHTML(m)}
      </button>
    `).join('');
  }
}

// ─── ACTIVE FILTER PILLS (HIỂN THỊ CÁC BỘ LỌC ĐANG CHỌN) ───
function renderActivePills() {
  const wrap = document.getElementById('active-filters-wrap');
  const list = document.getElementById('active-pills-list');
  const mobileCount = document.getElementById('mobile-filter-count');
  if (!wrap || !list) return;

  const pills = [];

  if (filterState.cap) {
    pills.push(`
      <span class="active-tag">
        Cấp: ${escapeHTML(filterState.cap)}
        <span class="active-tag__x" onclick="chonCapHoc('')" aria-label="Xóa bộ lọc cấp">&times;</span>
      </span>
    `);
  }
  filterState.khoi.forEach(k => {
    pills.push(`
      <span class="active-tag">
        ${escapeHTML(k)}
        <span class="active-tag__x" onclick="toggleKhoi('${escapeHTML(k)}')" aria-label="Xóa ${escapeHTML(k)}">&times;</span>
      </span>
    `);
  });
  filterState.mon.forEach(m => {
    pills.push(`
      <span class="active-tag">
        ${escapeHTML(m)}
        <span class="active-tag__x" onclick="toggleMon('${escapeHTML(m)}')" aria-label="Xóa môn ${escapeHTML(m)}">&times;</span>
      </span>
    `);
  });
  if (filterState.doiTuong !== 'all') {
    const lbl = filterState.doiTuong === 'giaovien' ? 'Giáo viên' : 'Học sinh / Phụ huynh';
    pills.push(`
      <span class="active-tag">
        ${lbl}
        <span class="active-tag__x" onclick="chonDoiTuong('all')" aria-label="Xóa đối tượng">&times;</span>
      </span>
    `);
  }
  if (filterState.loai !== 'all') {
    const typeNames = {
      giaoan: 'Giáo án/KHBD',
      dekiemtra: 'Đề kiểm tra',
      baitap: 'Bài tập & Phiếu',
      chuyende: 'Chuyên đề'
    };
    pills.push(`
      <span class="active-tag">
        ${typeNames[filterState.loai] || filterState.loai}
        <span class="active-tag__x" onclick="chonTheLoai('all')" aria-label="Xóa thể loại">&times;</span>
      </span>
    `);
  }
  if (filterState.tuKhoa.trim()) {
    pills.push(`
      <span class="active-tag">
        Từ khóa: "${escapeHTML(filterState.tuKhoa)}"
        <span class="active-tag__x" onclick="xoaTuKhoa()" aria-label="Xóa từ khóa">&times;</span>
      </span>
    `);
  }

  if (pills.length > 0) {
    wrap.style.display = 'flex';
    list.innerHTML = pills.join('') + `
      <span class="btn-clear-all" onclick="datLaiBoLoc()">Xóa tất cả &rarr;</span>
    `;
    if (mobileCount) {
      mobileCount.style.display = 'inline-block';
      mobileCount.textContent = pills.length;
    }
  } else {
    wrap.style.display = 'none';
    list.innerHTML = '';
    if (mobileCount) mobileCount.style.display = 'none';
  }
}

// ─── THAO TÁC BỘ LỌC ───
function chonCapHoc(cap) {
  if (filterState.cap === cap) {
    cap = ''; // Toggle off nếu bấm lại chính cấp đang chọn
  }
  filterState.cap = cap;

  // Nếu chọn 1 cấp cụ thể, loại bỏ các khối lớp không tương thích
  if (filterState.cap && KHOI_THEO_CAP[filterState.cap]) {
    const valid = new Set(KHOI_THEO_CAP[filterState.cap]);
    filterState.khoi = new Set([...filterState.khoi].filter(k => valid.has(k)));
  }
  // Loại bỏ các môn học không còn hợp lệ khi đổi cấp học
  sanitizeSubjects();
  capNhatGiaoDienKho();
}

function toggleKhoi(khoi) {
  if (!khoi) {
    filterState.khoi.clear();
  } else if (filterState.khoi.has(khoi)) {
    filterState.khoi.delete(khoi);
  } else {
    filterState.khoi.add(khoi);
    // Nếu khối lớp vừa chọn không thuộc cấp học đang lọc, tự động mở rộng về "Tất cả cấp"
    if (filterState.cap && KHOI_THEO_CAP[filterState.cap] && !KHOI_THEO_CAP[filterState.cap].includes(khoi)) {
      filterState.cap = '';
    }
  }
  // Loại bỏ các môn học không còn hợp lệ khi đổi khối lớp
  sanitizeSubjects();
  capNhatGiaoDienKho();
}

function toggleMon(mon) {
  if (!mon) {
    filterState.mon.clear();
  } else if (filterState.mon.has(mon)) {
    filterState.mon.delete(mon);
  } else {
    filterState.mon.add(mon);
  }
  capNhatGiaoDienKho();
}

function chonDoiTuong(dt) {
  filterState.doiTuong = dt || 'all';
  capNhatGiaoDienKho();
}

function chonTheLoai(tl) {
  filterState.loai = tl || 'all';
  capNhatGiaoDienKho();
}

function chonSort(sortVal) {
  filterState.sort = sortVal || 'default';
  capNhatGiaoDienKho();
}

function xoaTuKhoa() {
  filterState.tuKhoa = '';
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';
  capNhatGiaoDienKho();
}

function datLaiBoLoc() {
  filterState.cap = '';
  filterState.khoi.clear();
  filterState.mon.clear();
  filterState.doiTuong = 'all';
  filterState.loai = 'all';
  filterState.tuKhoa = '';
  filterState.sort = 'default';

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';

  capNhatGiaoDienKho();
  showToast('Đã đặt lại toàn bộ bộ lọc');
}

// ─── CHUYỂN ĐỔI CHẾ ĐỘ XEM (LƯỚI HOẶC DANH SÁCH) ───
window.setViewMode = function(mode) {
  filterState.viewMode = mode;
  const grid = document.getElementById('docs-grid');
  const btnGrid = document.getElementById('btn-view-grid');
  const btnList = document.getElementById('btn-view-list');

  if (grid) {
    if (mode === 'list') {
      grid.classList.add('docs-grid--list');
    } else {
      grid.classList.remove('docs-grid--list');
    }
  }
  if (btnGrid && btnList) {
    btnGrid.classList.toggle('view-btn--active', mode === 'grid');
    btnList.classList.toggle('view-btn--active', mode === 'list');
  }
};

// ─── CẬP NHẬT GIAO DIỆN KHO TÀI LIỆU ───
function capNhatGiaoDienKho() {
  renderFilterControls();
  syncStateToURL();

  const grid = document.getElementById('docs-grid');
  const countEl = document.getElementById('catalog-result-count');
  const emptyState = document.getElementById('catalog-empty-state');
  if (!grid) return;

  const results = filterDocuments();

  if (countEl) {
    countEl.textContent = `Tìm thấy ${results.length} kết quả`;
  }

  if (results.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    grid.style.display = filterState.viewMode === 'list' ? 'flex' : 'grid';
    if (emptyState) emptyState.style.display = 'none';
    grid.innerHTML = results.map(d => renderCard(d, '../')).join('');
  }
}

// ─── MOBILE FILTER DRAWER ───
function moDrawerBoLoc() {
  const drawer = document.getElementById('drawer-filter');
  const overlay = document.getElementById('drawer-filter-overlay');
  if (drawer && overlay) {
    drawer.classList.add('drawer--open');
    overlay.classList.add('drawer-overlay--open');
    document.body.classList.add('no-scroll');
    renderDrawerChips();
  }
}

function dongDrawerBoLoc() {
  const drawer = document.getElementById('drawer-filter');
  const overlay = document.getElementById('drawer-filter-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('drawer--open');
    overlay.classList.remove('drawer-overlay--open');
    document.body.classList.remove('no-scroll');
  }
}

// ─── TRANG CHI TIẾT TÀI LIỆU (DETAIL PAGE) ───
function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const ma = params.get('ma');
  const doc = danhSach.find(d => d.ma === ma) || danhSach[0];
  if (!doc) return;

  document.title = `${doc.tieuDe} — Tài Liệu Đỉnh`;

  // Breadcrumb
  const bcTitle = document.getElementById('detail-bc-title');
  if (bcTitle) bcTitle.textContent = doc.tieuDe;

  // Main Cover
  const coverWrap = document.getElementById('detail-cover-container');
  if (coverWrap) {
    coverWrap.innerHTML = `
      <div class="detail-main-cover">
        <span class="doc-card__badge-docx" style="top:20px; right:20px; font-size:0.8rem; padding:4px 10px;">${escapeHTML(doc.dinhDang || 'DOCX')}</span>
        <div class="detail-cover__title">${escapeHTML(doc.tieuDe)}</div>
        <div class="detail-cover__sub">${escapeHTML(doc.mon)} • ${escapeHTML(doc.khoi)} • ${escapeHTML(doc.capHoc)}</div>
      </div>
    `;
  }

  // Title & Tags
  const titleEl = document.getElementById('detail-title');
  if (titleEl) titleEl.textContent = doc.tieuDe;

  const tagsEl = document.getElementById('detail-tags');
  if (tagsEl) {
    tagsEl.innerHTML = `
      <span class="tag tag--highlight">${escapeHTML(doc.capHoc)}</span>
      <span class="tag">${escapeHTML(doc.khoi)}</span>
      <span class="tag">${escapeHTML(doc.mon)}</span>
      <span class="tag">${escapeHTML(doc.chuanCV || 'Bản chuẩn Word')}</span>
    `;
  }

  // Description
  const descEl = document.getElementById('detail-desc');
  if (descEl) descEl.textContent = doc.moTa;

  // Metadata
  const dtText = doc.doiTuong === 'giaovien' ? 'Giáo viên' : (doc.doiTuong === 'hocsinh' ? 'Học sinh & Phụ huynh' : 'Giáo viên & Học sinh');
  const metaObj = {
    'detail-meta-dinhdang': doc.dinhDang ? `Word (.${doc.dinhDang.toLowerCase()})` : 'Word (.docx)',
    'detail-meta-doituong': dtText,
    'detail-meta-sotrang': 'Trọn bộ cả năm',
    'detail-meta-capnhat': 'Năm học 2025–2026 (GDPT mới)'
  };
  for (const [id, val] of Object.entries(metaObj)) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // Zalo Deep Link
  const zaloBtn = document.getElementById('btn-detail-zalo');
  if (zaloBtn) {
    const zaloMsg = `Chào bạn, mình cần tư vấn tài liệu: [${doc.ma}] - ${doc.tieuDe}`;
    zaloBtn.href = `${CONFIG.ZALO_LINK}?text=${encodeURIComponent(zaloMsg)}`;
  }

  // Tab Content (Mục lục, Nội dung)
  const tabContentEl = document.getElementById('detail-tab-content');
  if (tabContentEl) {
    tabContentEl.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <h4 style="font-weight: 600; color:var(--c-text-primary);">1. Kế hoạch &amp; Cấu trúc tài liệu:</h4>
        <p>Biên soạn định dạng Microsoft Word (.docx), phân cấp đề mục rõ ràng, dễ dàng chỉnh sửa thông tin trường, lớp và giáo viên.</p>
        <h4 style="font-weight: 600; color:var(--c-text-primary);">2. Điểm nổi bật:</h4>
        <ul style="padding-left:20px; display:flex; flex-direction:column; gap:6px;">
          <li>${escapeHTML(doc.chuanCV || 'Chuẩn chương trình GDPT mới')}</li>
          <li>${escapeHTML(doc.maTranDapAn || 'Kèm ma trận và bảng đặc tả chi tiết')}</li>
          <li>Font chữ Unicode chuẩn, căn lề A4 sẵn sàng in ấn.</li>
        </ul>
      </div>
    `;
  }

  // PDF Preview Iframe nếu có link Google Drive hợp lệ
  const pdfContainer = document.getElementById('detail-pdf-preview');
  if (pdfContainer && doc.linkDemo && /^https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/.test(doc.linkDemo)) {
    const fileId = doc.linkDemo.match(/\/d\/([a-zA-Z0-9_-]+)/)[1];
    pdfContainer.style.display = 'block';
    pdfContainer.innerHTML = `
      <h3 style="font-size:1.15rem; font-weight: 600; color:var(--c-text-primary); margin-bottom:12px;">Bản đọc thử PDF (Trực tiếp từ Google Drive)</h3>
      <div class="pdf-embed-container">
        <iframe src="https://drive.google.com/file/d/${escapeHTML(fileId)}/preview" allow="autoplay" loading="lazy"></iframe>
      </div>
    `;
  } else if (pdfContainer) {
    pdfContainer.style.display = 'block';
    pdfContainer.innerHTML = `
      <div style="background:var(--c-surface-subtle); border:1px dashed var(--c-border-strong); border-radius:var(--r-md); padding:24px; text-align:center;">
        <p style="font-weight:600; color:var(--c-text-primary); margin-bottom:6px;">Bản đọc thử đang được cập nhật</p>
        <p style="font-size:0.88rem; color:var(--c-text-secondary); margin-bottom:12px;">Vui lòng bấm &ldquo;Trao đổi qua Zalo&rdquo; để xem trước trang mẫu thực tế.</p>
      </div>
    `;
  }

  // Tài liệu tương tự (Related Documents)
  const relatedGrid = document.getElementById('detail-related-grid');
  if (relatedGrid) {
    const related = danhSach.filter(d => d.ma !== doc.ma && (d.capHoc === doc.capHoc || d.mon === doc.mon)).slice(0, 4);
    relatedGrid.innerHTML = related.map(d => renderCard(d, '../')).join('');
  }
}

// ─── TAB SWITCHING TRÊN TRANG CHI TIẾT ───
window.switchDetailTab = function(tabName, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('tab-btn--active'));
  if (btn) btn.classList.add('tab-btn--active');
  const tabContent = document.getElementById('detail-tab-content');
  if (!tabContent) return;

  if (tabName === 'mucluc') {
    tabContent.innerHTML = `
      <ol style="padding-left:20px; line-height:2;">
        <li><strong>Phần I:</strong> Mục tiêu và yêu cầu cần đạt (phẩm chất, năng lực).</li>
        <li><strong>Phần II:</strong> Thiết bị dạy học và học liệu trực quan.</li>
        <li><strong>Phần III:</strong> Tiến trình dạy học 4 bước chuẩn BGD&ĐT.</li>
        <li><strong>Phần IV:</strong> Phiếu bài tập củng cố và đáp án chi tiết.</li>
      </ol>
    `;
  } else if (tabName === 'noidung') {
    tabContent.innerHTML = `
      <p style="margin-bottom:10px;">Tài liệu lưu dưới dạng tệp Microsoft Word (.docx) nguyên gốc, không đặt mật khẩu, thuận tiện chỉnh sửa và in ấn ngay.</p>
      <p>Nhận file nhanh chóng qua Zalo <strong>${CONFIG.ZALO_PHONE_DISPLAY}</strong> để sử dụng trọn đời.</p>
    `;
  } else {
    tabContent.innerHTML = `
      <p><strong>Bản quyền &amp; phân phối:</strong> Tài Liệu Đỉnh — Đỉnh cao tài liệu.</p>
      <p>Hỗ trợ kỹ thuật và định dạng file Word qua Zalo <strong>${CONFIG.ZALO_PHONE_DISPLAY}</strong> (8:00 – 21:00 hàng ngày).</p>
    `;
  }
};

// ─── TRANG LIÊN HỆ & TẠO TIN NHẮN ZALO ───
function initContactPage() {
  const form = document.getElementById('contact-quick-form');
  const btnSubmit = document.getElementById('btn-contact-generate');
  if (!form || !btnSubmit) return;

  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const vaiTro = document.getElementById('c-vaitro')?.value || 'Người học';
    const cap = document.getElementById('c-cap')?.value || 'Phổ thông';
    const mon = document.getElementById('c-mon')?.value || 'Tài liệu giáo dục';
    const mota = document.getElementById('c-mota')?.value.trim() || 'Cần tư vấn trọn bộ';

    const msg = `Chào Tài Liệu Đỉnh, mình là [${vaiTro}], đang tìm tài liệu [${cap}] - Môn [${mon}]. Nhu cầu: ${mota}`;

    navigator.clipboard.writeText(msg).then(() => {
      showToast('Đã sao chép nội dung tin nhắn!');
      setTimeout(() => {
        window.open(`${CONFIG.ZALO_LINK}?text=${encodeURIComponent(msg)}`, '_blank');
      }, 500);
    }).catch(() => {
      window.open(`${CONFIG.ZALO_LINK}?text=${encodeURIComponent(msg)}`, '_blank');
    });
  });
}

// ─── TRANG HƯỚNG DẪN: FAQ ACCORDION ───
function initGuidePage() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      item.classList.toggle('faq-item--open');
    });
  });
}

// ─── TRANG CHỦ: FEATURED DOCS & HERO SEARCH ───
function initHomePage() {
  const featuredGrid = document.getElementById('home-featured-grid');
  if (featuredGrid) {
    const sampleDocs = danhSach.slice(0, 8);
    featuredGrid.innerHTML = sampleDocs.map(d => renderCard(d, '')).join('');
  }

  const heroSearchInput = document.getElementById('hero-search-input');
  const heroSearchBtn = document.getElementById('hero-search-btn');

  const doSearch = () => {
    const kw = heroSearchInput ? heroSearchInput.value.trim() : '';
    window.location.href = `kho-tai-lieu/?q=${encodeURIComponent(kw)}`;
  };

  if (heroSearchBtn) heroSearchBtn.addEventListener('click', doSearch);
  if (heroSearchInput) {
    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doSearch();
    });
  }
}

// ─── ĐỒNG BỘ NỀN AN TOÀN TỪ GOOGLE SHEETS QUA FETCH JSON (KHÔNG DÙNG SCRIPT ĐỘNG / JSONP) ───
function processSheetData(res) {
  try {
    if (!res || !res.table || !res.table.rows) return;
    const rows = res.table.rows;
    const sheetDocs = [];

    rows.forEach((r, idx) => {
      const c = r.c || [];
      const ma = c[0] && c[0].v ? String(c[0].v).trim() : `TLD-${idx + 1}`;
      const tieuDe = c[1] && c[1].v ? String(c[1].v).trim() : '';
      if (!tieuDe) return;

      const bMa = boDao(ma);
      const bTd = boDao(tieuDe);
      if ((bMa === 'ma' || bMa === 'code') && (bTd.includes('tieu de') || bTd.includes('ten tai lieu'))) return;

      const moTa = c[2] && c[2].v ? String(c[2].v).trim() : '';
      const rawMon = c[3] && c[3].v ? String(c[3].v).trim() : 'Toán';
      const rawKhoi = c[4] && c[4].v ? String(c[4].v).trim() : 'Lớp 12';
      const rawDemo = c[5] && c[5].v ? String(c[5].v).trim() : '';

      // Xác định cấp học
      let cap = 'THPT';
      const rawLower = rawKhoi.toLowerCase();
      if (rawLower.includes('tiểu') || ['lớp 1', 'lớp 2', 'lớp 3', 'lớp 4', 'lớp 5'].some(l => rawLower.includes(l))) {
        cap = 'Tiểu học';
      } else if (['lớp 6', 'lớp 7', 'lớp 8', 'lớp 9'].some(l => rawLower.includes(l))) {
        cap = 'THCS';
      } else {
        cap = 'THPT';
      }

      let monChuan = rawMon;
      if (rawMon === 'Văn') monChuan = cap === 'Tiểu học' ? 'Tiếng Việt' : 'Ngữ văn';
      else if (rawMon === 'Anh') monChuan = 'Tiếng Anh';
      else if (rawMon === 'KHTN') monChuan = cap === 'Tiểu học' ? 'Khoa học' : 'Khoa học Tự nhiên';
      else if (rawMon === 'KHXH') monChuan = 'Lịch sử và Địa lý';

      // Kiểm tra an toàn cho URL demo
      let safeDemo = '';
      if (rawDemo && /^https:\/\/drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+\/(?:view|preview)/.test(rawDemo)) {
        safeDemo = rawDemo;
      }

      sheetDocs.push({
        ma: ma,
        tieuDe: tieuDe,
        moTa: moTa,
        mon: monChuan,
        khoi: rawKhoi,
        capHoc: cap,
        doiTuong: 'ca_hai',
        loai: 'giaoan',
        dinhDang: 'DOCX',
        linkDemo: safeDemo,
        boSach: 'Kết nối tri thức',
        chuanCV: cap === 'Tiểu học' ? 'Giáo án (CV 2345)' : 'Kế hoạch bài dạy (CV 5512)',
        maTranDapAn: 'Đầy đủ nội dung và đáp án'
      });
    });

    if (sheetDocs.length > 0) {
      const mapMoi = new Map(sheetDocs.map(d => [d.ma, d]));
      danhSach = danhSach.map(d => mapMoi.has(d.ma) ? Object.assign({}, d, mapMoi.get(d.ma)) : d);
      sheetDocs.forEach(d => {
        if (!danhSach.some(exist => exist.ma === d.ma)) {
          danhSach.push(d);
        }
      });

      if (window.location.pathname.includes('/kho-tai-lieu')) {
        capNhatGiaoDienKho();
      } else if (window.location.pathname.includes('/tai-lieu')) {
        initDetailPage();
      }
    }
  } catch (err) {
    console.warn('Google Sheets data processing skipped:', err);
  }
}

// ─── DATA ADAPTER — LỚP TRUY XUẤT DỮ LIỆU TẬP TRUNG (DATA ACCESS LAYER) ───
// Nguyên tắc an toàn:
// 1. Tuyệt đối không gọi trực tiếp endpoint Google Sheets gviz/tq từ trình duyệt client.
// 2. Chỉ nạp các trường được phép công khai (PUBLIC_WHITELIST).
// 3. Tự động loại bỏ bất kỳ bản nháp (status === 'draft') hoặc dữ liệu nội bộ.
const DataAdapter = {
  PUBLIC_WHITELIST: ['ma', 'tieuDe', 'moTa', 'mon', 'khoi', 'capHoc', 'doiTuong', 'loai', 'dinhDang', 'linkDemo', 'boSach', 'chuanCV', 'maTranDapAn'],

  sanitize(item) {
    if (!item || item.status === 'draft' || item.status === 'archived') {
      return null;
    }
    const clean = {};
    for (const key of this.PUBLIC_WHITELIST) {
      if (item[key] !== undefined) {
        clean[key] = item[key];
      }
    }
    return clean;
  },

  async loadDocuments() {
    // Khi triển khai kết nối API máy chủ / Supabase proxy
    if (CONFIG.DATA_SOURCE === 'api_proxy' || CONFIG.DATA_SOURCE === 'supabase_api') {
      try {
        const res = await fetch(CONFIG.API_ENDPOINT);
        if (res.ok) {
          const json = await res.json();
          if (json.data && Array.isArray(json.data)) {
            const sanitized = json.data.map(d => this.sanitize(d)).filter(Boolean);
            if (sanitized.length > 0) {
              danhSach = sanitized;
              if (window.location.pathname.includes('/kho-tai-lieu')) {
                capNhatGiaoDienKho();
              } else if (window.location.pathname.includes('/tai-lieu')) {
                initDetailPage();
              }
              return danhSach;
            }
          }
        }
      } catch (err) {
        console.warn('[DataAdapter] Remote proxy unavailable, falling back to verified local dataset:', err);
      }
    }

    // Chế độ mặc định an toàn: Sử dụng kho 66 học liệu chuẩn đã kiểm duyệt, không gọi gviz/tq
    return danhSach;
  }
};

// ─── KHỞI TẠO TOÀN TRANG (DOM READY) ───
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // 1. Mobile Menu Toggle ở Header
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const navMobileMenu = document.getElementById('nav-mobile-menu');
  if (navToggleBtn && navMobileMenu) {
    navToggleBtn.addEventListener('click', () => {
      navMobileMenu.classList.toggle('nav-mobile--open');
    });
  }

  // 2. Tùy biến khởi tạo theo từng trang
  if (path.includes('/kho-tai-lieu')) {
    loadStateFromURL();

    // Lắng nghe Search Input tại Kho tài liệu
    const searchInput = document.getElementById('catalog-search-input');
    const searchBtn = document.getElementById('catalog-search-btn');
    if (searchInput) {
      searchInput.value = filterState.tuKhoa;
      let searchTimeout = null;
      searchInput.addEventListener('input', (e) => {
        filterState.tuKhoa = e.target.value;
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          capNhatGiaoDienKho();
        }, 200);
      });
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          clearTimeout(searchTimeout);
          capNhatGiaoDienKho();
        }
      });
    }
    if (searchBtn) {
      searchBtn.addEventListener('click', capNhatGiaoDienKho);
    }

    // Lắng nghe Dropdown Selects trên Desktop Filter Bar
    const selCap = document.getElementById('filter-select-cap');
    const selKhoi = document.getElementById('filter-select-khoi');
    const selMon = document.getElementById('filter-select-mon');
    const selDoiTuong = document.getElementById('filter-select-doituong');
    const selLoai = document.getElementById('filter-select-loai');
    const selSort = document.getElementById('filter-select-sort');

    if (selCap) selCap.addEventListener('change', (e) => chonCapHoc(e.target.value));
    if (selKhoi) selKhoi.addEventListener('change', (e) => toggleKhoi(e.target.value));
    if (selMon) selMon.addEventListener('change', (e) => toggleMon(e.target.value));
    if (selDoiTuong) selDoiTuong.addEventListener('change', (e) => chonDoiTuong(e.target.value));
    if (selLoai) selLoai.addEventListener('change', (e) => chonTheLoai(e.target.value));
    if (selSort) selSort.addEventListener('change', (e) => chonSort(e.target.value));

    // Nút mở Drawer Mobile
    const btnMobileFilter = document.getElementById('btn-open-mobile-filter');
    if (btnMobileFilter) btnMobileFilter.addEventListener('click', moDrawerBoLoc);

    capNhatGiaoDienKho();
  } else if (path.includes('/tai-lieu')) {
    initDetailPage();
  } else if (path.includes('/gioi-thieu')) {
    // Trang giới thiệu
  } else if (path.includes('/huong-dan')) {
    initGuidePage();
  } else if (path.includes('/lien-he')) {
    initContactPage();
  } else {
    initHomePage();
  }

  // 3. Khởi tạo dữ liệu qua DataAdapter an toàn (Không bắn gviz/tq từ trình duyệt)
  DataAdapter.loadDocuments();
});
