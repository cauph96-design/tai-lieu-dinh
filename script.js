/**
 * TÀI LIỆU ĐỈNH — SCRIPT XỬ LÝ TOÀN TRANG
 * Tên thương hiệu: Tài Liệu Đỉnh | Slogan chính thức: Đỉnh cao tài liệu
 * Chuyên mục: Học liệu Microsoft Word (.docx) Giáo viên & Học sinh Lớp 1–12
 * Zalo tư vấn: 0926.999.869 (https://zalo.me/0926999869)
 */

// ─── DỮ LIỆU TÀI LIỆU CHUẨN (66 TÀI LIỆU PHỔ THÔNG 1-12) ───
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
    "linkDemo": "https://drive.google.com/file/d/1nZmAg8-FrKxhI8i8RrxzYDg0GDTdRPkz/view?usp=sharing",
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

// ─── CẤU HÌNH PHÂN LOẠI MÔN THEO LỚP ───
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

// ─── CẤU HÌNH HỆ THỐNG ───
const CONFIG = {
  ZALO_PHONE: '0926999869',
  ZALO_PHONE_DISPLAY: '0926.999.869',
  ZALO_LINK: 'https://zalo.me/0926999869',
  SHEET_ID: '1wQQXVthJrTmYSJPJfuGJ3kbHdi3YnhM1_Dch1QAZvuM',
  SUPPORT_HOURS: '8h00 – 12h00 | 13h30 – 21h30'
};

// ─── TRẠNG THÁI BỘ LỌC TOÀN CỤC (CHO TRANG KHO TÀI LIỆU) ───
let filterState = {
  cap: '',
  khoi: new Set(),
  mon: new Set(),
  doiTuong: 'all',
  loai: 'all',
  tuKhoa: ''
};

// ─── HÀM BỎ DẤU TIẾNG VIỆT ───
function boDao(s) {
  if (!s) return '';
  return s.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, m => m === 'đ' ? 'd' : 'D')
    .toLowerCase()
    .trim();
}

// ─── XỬ LÝ AN TOÀN HTML (TRÁNH XSS) ───
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

// ─── LỌC TÀI LIỆU CHUẨN MỰC (LOGIC OR TRONG NHÓM, AND GIỮA CÁC NHÓM) ───
function filterDocuments() {
  let list = danhSach;

  // Lọc Cấp học (nếu không chọn lớp cụ thể)
  if (filterState.cap && filterState.khoi.size === 0) {
    list = list.filter(d => d.capHoc === filterState.cap);
  }

  // Lọc Khối lớp (OR giữa các lớp đã chọn)
  if (filterState.khoi.size > 0) {
    list = list.filter(d => filterState.khoi.has(d.khoi));
  }

  // Lọc Môn học (OR giữa các môn đã chọn)
  if (filterState.mon.size > 0) {
    list = list.filter(d => filterState.mon.has(d.mon));
  }

  // Lọc Đối tượng
  if (filterState.doiTuong && filterState.doiTuong !== 'all') {
    list = list.filter(d => d.doiTuong === filterState.doiTuong || d.doiTuong === 'ca_hai');
  }

  // Lọc Loại tài liệu
  if (filterState.loai && filterState.loai !== 'all') {
    list = list.filter(d => d.loai === filterState.loai);
  }

  // Lọc Từ khóa tìm kiếm (AND giữa các token từ khóa)
  if (filterState.tuKhoa.trim()) {
    const tokens = boDao(filterState.tuKhoa).split(/\s+/).filter(Boolean);
    if (tokens.length > 0) {
      list = list.filter(d => {
        const fullText = boDao(`${d.ma} ${d.tieuDe} ${d.moTa} ${d.mon} ${d.khoi} ${d.capHoc} ${d.boSach || ''} ${d.chuanCV || ''}`);
        return tokens.every(token => fullText.includes(token));
      });
    }
  }

  return list;
}

// ─── RENDER THẺ HỒ SƠ TÀI LIỆU ───
function renderCard(d, prefix = '') {
  const doiTuongBadge = d.doiTuong === 'giaovien' ? '<span class="tag tag--audience">Giáo viên</span>' : '<span class="tag tag--audience">Học sinh / Phụ huynh</span>';
  const detailUrl = `${prefix}tai-lieu/?id=${encodeURIComponent(d.ma)}`;
  const zaloUrl = `https://zalo.me/${CONFIG.ZALO_PHONE}`;

  return `
    <article class="card" data-id="${escapeHTML(d.ma)}">
      <div class="card__header">
        <span class="card__badge-docx">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 13l-1.5 5h-1l-1.5-5h1l1 3.5 1-3.5h1z"/></svg>
          ${escapeHTML(d.dinhDang || 'DOCX')}
        </span>
        <div class="card__tags">
          <span class="tag tag--grade">${escapeHTML(d.khoi)}</span>
          <span class="tag tag--subject">${escapeHTML(d.mon)}</span>
          ${doiTuongBadge}
        </div>
      </div>
      <div class="card__body">
        <h3 class="card__title">
          <a href="${detailUrl}">${escapeHTML(d.tieuDe)}</a>
        </h3>
        <p class="card__desc">${escapeHTML(d.moTa)}</p>
        <div class="card__trust-box">
          <div class="trust-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Bộ sách: <strong>${escapeHTML(d.boSach || 'Chuẩn GDPT 2018')}</strong></span>
          </div>
          <div class="trust-line">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            <span>Quy chuẩn: <strong>${escapeHTML(d.chuanCV || 'Bám sát chương trình')}</strong></span>
          </div>
        </div>
      </div>
      <div class="card__footer">
        <a href="${detailUrl}" class="btn--card-detail">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          Xem chi tiết
        </a>
        <a href="${zaloUrl}" target="_blank" rel="noopener" class="btn--card-zalo" title="Nhắn Zalo hỏi tài liệu này">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          Hỏi Zalo
        </a>
      </div>
    </article>
  `;
}

// ─── ĐIỀU HƯỚNG URL SYNC CHO KHO TÀI LIỆU ───
function syncStateToURL() {
  const params = new URLSearchParams();
  if (filterState.cap) params.set('cap', filterState.cap);
  if (filterState.khoi.size > 0) params.set('khoi', Array.from(filterState.khoi).join(','));
  if (filterState.mon.size > 0) params.set('mon', Array.from(filterState.mon).join(','));
  if (filterState.doiTuong !== 'all') params.set('doituong', filterState.doiTuong);
  if (filterState.loai !== 'all') params.set('loai', filterState.loai);
  if (filterState.tuKhoa.trim()) params.set('q', filterState.tuKhoa.trim());

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

  filterState.cap = cap;
  filterState.khoi = new Set(khoi);
  filterState.mon = new Set(mon);
  filterState.doiTuong = doiTuong;
  filterState.loai = loai;
  filterState.tuKhoa = q;
}

// ─── RENDER BỘ LỌC CHIP TẠI KHO TÀI LIỆU ───
function renderFilterChips() {
  // 1. Cấp học (Chỉ 3 cấp: Tiểu học, THCS, THPT)
  const levelFilter = document.getElementById('level-filter');
  const mLevelFilter = document.getElementById('m-level-filter');
  const capOptions = [
    { id: '', label: 'Tất cả cấp' },
    { id: 'Tiểu học', label: 'Tiểu học (1–5)' },
    { id: 'THCS', label: 'THCS (6–9)' },
    { id: 'THPT', label: 'THPT (10–12)' }
  ];

  function buildChips(opts, currentVal, onClickFn) {
    return opts.map(o => `
      <button class="chip ${currentVal === o.id ? 'chip--active' : ''}" onclick="${onClickFn}('${o.id}')">
        ${escapeHTML(o.label)}
      </button>
    `).join('');
  }

  if (levelFilter) levelFilter.innerHTML = buildChips(capOptions, filterState.cap, 'chonCapHoc');
  if (mLevelFilter) mLevelFilter.innerHTML = buildChips(capOptions, filterState.cap, 'chonCapHoc');

  // 2. Khối lớp (Lớp 1 đến Lớp 12)
  const gradeFilter = document.getElementById('grade-filter');
  const mGradeFilter = document.getElementById('m-grade-filter');
  let validGrades = [];
  if (filterState.cap && KHOI_THEO_CAP[filterState.cap]) {
    validGrades = KHOI_THEO_CAP[filterState.cap];
  } else {
    validGrades = ['Lớp 1','Lớp 2','Lớp 3','Lớp 4','Lớp 5','Lớp 6','Lớp 7','Lớp 8','Lớp 9','Lớp 10','Lớp 11','Lớp 12'];
  }

  function buildMultiChips(items, activeSet, toggleFn) {
    return items.map(item => `
      <button class="chip ${activeSet.has(item) ? 'chip--active' : ''}" onclick="${toggleFn}('${item}')">
        ${escapeHTML(item)}
      </button>
    `).join('');
  }

  if (gradeFilter) gradeFilter.innerHTML = buildMultiChips(validGrades, filterState.khoi, 'toggleKhoi');
  if (mGradeFilter) mGradeFilter.innerHTML = buildMultiChips(validGrades, filterState.khoi, 'toggleKhoi');

  // 3. Môn học
  const subjectFilter = document.getElementById('subject-filter');
  const mSubjectFilter = document.getElementById('m-subject-filter');
  let validSubjects = new Set();

  if (filterState.khoi.size > 0) {
    filterState.khoi.forEach(k => {
      if (MON_THEO_LOP[k]) MON_THEO_LOP[k].forEach(m => validSubjects.add(m));
    });
  } else if (filterState.cap && MON_THEO_CAP[filterState.cap]) {
    MON_THEO_CAP[filterState.cap].forEach(m => validSubjects.add(m));
  } else {
    Object.values(MON_THEO_CAP).forEach(arr => arr.forEach(m => validSubjects.add(m)));
  }

  const subjectsArr = Array.from(validSubjects);
  if (subjectFilter) subjectFilter.innerHTML = buildMultiChips(subjectsArr, filterState.mon, 'toggleMon');
  if (mSubjectFilter) mSubjectFilter.innerHTML = buildMultiChips(subjectsArr, filterState.mon, 'toggleMon');

  // 4. Đối tượng (Giáo viên, Học sinh / Phụ huynh)
  const audFilter = document.getElementById('audience-filter');
  const mAudFilter = document.getElementById('m-audience-filter');
  const audOptions = [
    { id: 'all', label: 'Tất cả' },
    { id: 'giaovien', label: 'Giáo viên' },
    { id: 'nguoihoc', label: 'Học sinh / Phụ huynh' }
  ];
  if (audFilter) audFilter.innerHTML = buildChips(audOptions, filterState.doiTuong, 'chonDoiTuong');
  if (mAudFilter) mAudFilter.innerHTML = buildChips(audOptions, filterState.doiTuong, 'chonDoiTuong');

  // 5. Thể loại (Giáo án / KHBD, Đề kiểm tra, Ôn tập)
  const typeFilter = document.getElementById('type-filter');
  const mTypeFilter = document.getElementById('m-type-filter');
  const typeOptions = [
    { id: 'all', label: 'Tất cả thể loại' },
    { id: 'giaoan', label: 'Kế hoạch bài dạy / Giáo án' },
    { id: 'dekiemtra', label: 'Bộ đề kiểm tra định kỳ' },
    { id: 'ontap', label: 'Tài liệu ôn tập / Chuyên đề' }
  ];
  if (typeFilter) typeFilter.innerHTML = buildChips(typeOptions, filterState.loai, 'chonTheLoai');
  if (mTypeFilter) mTypeFilter.innerHTML = buildChips(typeOptions, filterState.loai, 'chonTheLoai');

  // Cập nhật Active Filter Pills
  renderActivePills();
}

// ─── ACTIVE FILTER PILLS ───
function renderActivePills() {
  const wrap = document.getElementById('active-filters-wrap');
  const list = document.getElementById('active-pills-list');
  const mobileCount = document.getElementById('mobile-filter-count');
  if (!wrap || !list) return;

  const pills = [];

  if (filterState.cap) {
    pills.push(`<span class="pill">Cấp: ${escapeHTML(filterState.cap)} <span class="pill__x" data-action="remove-cap" aria-label="Xóa bộ lọc cấp học"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></span></span>`);
  }
  filterState.khoi.forEach(k => {
    pills.push(`<span class="pill">${escapeHTML(k)} <span class="pill__x" data-action="remove-khoi" data-val="${encodeURIComponent(k)}" aria-label="Xóa ${escapeHTML(k)}"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></span></span>`);
  });
  filterState.mon.forEach(m => {
    pills.push(`<span class="pill">Môn: ${escapeHTML(m)} <span class="pill__x" data-action="remove-mon" data-val="${encodeURIComponent(m)}" aria-label="Xóa môn ${escapeHTML(m)}"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></span></span>`);
  });
  if (filterState.doiTuong !== 'all') {
    const lbl = filterState.doiTuong === 'giaovien' ? 'Giáo viên' : 'Học sinh / Phụ huynh';
    pills.push(`<span class="pill">${lbl} <span class="pill__x" data-action="remove-doituong" aria-label="Xóa bộ lọc đối tượng"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></span></span>`);
  }
  if (filterState.loai !== 'all') {
    const typeNames = { giaoan: 'Giáo án/KHBD', dekiemtra: 'Đề kiểm tra', ontap: 'Ôn tập/Chuyên đề' };
    pills.push(`<span class="pill">${typeNames[filterState.loai] || filterState.loai} <span class="pill__x" data-action="remove-loai" aria-label="Xóa thể loại"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></span></span>`);
  }
  if (filterState.tuKhoa.trim()) {
    pills.push(`<span class="pill">Từ khóa: "${escapeHTML(filterState.tuKhoa)}" <span class="pill__x" data-action="remove-tukhoa" aria-label="Xóa từ khóa"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg></span></span>`);
  }

  if (pills.length > 0) {
    wrap.style.display = 'flex';
    list.innerHTML = pills.join('');

    if (!list._hasDelegatedPills) {
      list._hasDelegatedPills = true;
      list.addEventListener('click', (e) => {
        const btn = e.target.closest('.pill__x');
        if (!btn) return;
        const action = btn.dataset.action;
        const val = decodeURIComponent(btn.dataset.val || '');
        if (action === 'remove-cap') chonCapHoc('');
        else if (action === 'remove-khoi') toggleKhoi(val);
        else if (action === 'remove-mon') toggleMon(val);
        else if (action === 'remove-doituong') chonDoiTuong('all');
        else if (action === 'remove-loai') chonTheLoai('all');
        else if (action === 'remove-tukhoa') xoaTuKhoa();
      });
    }

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
  // Nếu bấm lại vào cấp đang chọn -> quay về "Tất cả cấp"
  if (filterState.cap === cap) {
    cap = '';
  }
  filterState.cap = cap;
  // Loại bỏ các khối lớp không thuộc cấp mới nếu chọn cấp cụ thể
  if (filterState.cap && KHOI_THEO_CAP[filterState.cap]) {
    const valid = new Set(KHOI_THEO_CAP[filterState.cap]);
    filterState.khoi = new Set([...filterState.khoi].filter(k => valid.has(k)));
  }
  // Loại bỏ các môn học không thuộc cấp mới nếu chọn cấp cụ thể
  if (filterState.cap && MON_THEO_CAP[filterState.cap]) {
    const validMon = new Set(MON_THEO_CAP[filterState.cap]);
    filterState.mon = new Set([...filterState.mon].filter(m => validMon.has(m)));
  }
  capNhatGiaoDienKho();
}

function toggleKhoi(khoi) {
  if (filterState.khoi.has(khoi)) {
    filterState.khoi.delete(khoi);
  } else {
    filterState.khoi.add(khoi);
    // Nếu đang chọn cấp học cụ thể mà người dùng chọn một khối lớp thuộc cấp khác,
    // tự động chuyển Cấp học về "Tất cả cấp" để cho phép đa chọn liên cấp tự do.
    if (filterState.cap && KHOI_THEO_CAP[filterState.cap] && !KHOI_THEO_CAP[filterState.cap].includes(khoi)) {
      filterState.cap = '';
    }
  }
  capNhatGiaoDienKho();
}

function toggleMon(mon) {
  if (filterState.mon.has(mon)) {
    filterState.mon.delete(mon);
  } else {
    filterState.mon.add(mon);
  }
  capNhatGiaoDienKho();
}

function chonDoiTuong(dt) {
  filterState.doiTuong = dt;
  capNhatGiaoDienKho();
}

function chonTheLoai(tl) {
  filterState.loai = tl;
  capNhatGiaoDienKho();
}

function xoaTuKhoa() {
  filterState.tuKhoa = '';
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  capNhatGiaoDienKho();
}

function datLaiBoLoc() {
  filterState = {
    cap: '',
    khoi: new Set(),
    mon: new Set(),
    doiTuong: 'all',
    loai: 'all',
    tuKhoa: ''
  };
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  capNhatGiaoDienKho();
}

// ─── CẬP NHẬT GIAO DIỆN KHO TÀI LIỆU ───
function capNhatGiaoDienKho() {
  renderFilterChips();
  syncStateToURL();

  const results = filterDocuments();
  const grid = document.getElementById('document-grid');
  const empty = document.getElementById('empty-state');
  const count = document.getElementById('result-count');

  if (count) {
    count.textContent = `Hiển thị ${results.length} / ${danhSach.length} tài liệu Word`;
  }

  if (!grid) return;

  if (results.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
  } else {
    if (empty) empty.style.display = 'none';
    grid.innerHTML = results.map(d => renderCard(d, '../')).join('');
    initMotionGraphics();
  }

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

// ─── DRAWER MOBILE CHO KHO TÀI LIỆU ───
function moDrawerBoLoc() {
  const drawer = document.getElementById('drawer-filter-overlay');
  if (drawer) {
    drawer.classList.add('drawer-overlay--active');
    document.body.classList.add('no-scroll');
  }
}

function dongDrawerBoLoc() {
  const drawer = document.getElementById('drawer-filter-overlay');
  if (drawer) {
    drawer.classList.remove('drawer-overlay--active');
    document.body.classList.remove('no-scroll');
  }
}

// ─── TRANG CHI TIẾT TÀI LIỆU (/tai-lieu/) ───
function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const docId = params.get('id') || params.get('ma') || '';
  const doc = danhSach.find(d => d.ma === docId);

  const container = document.getElementById('detail-page-container');
  if (!container) return;

  if (!doc) {
    container.innerHTML = `
      <div class="empty">
        <svg class="empty__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 8l6 6M14 8l-6 6"/></svg>
        <h3>Không tìm thấy tài liệu này</h3>
        <p>Tài liệu có mã "<strong>${escapeHTML(docId)}</strong>" không tồn tại hoặc đã được cập nhật sang danh mục mới.</p>
        <a href="../kho-tai-lieu/" class="btn btn--primary" style="margin-top:12px;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          Quay lại Kho tài liệu
        </a>
      </div>
    `;
    return;
  }

  document.title = `${doc.tieuDe} — Chi tiết tài liệu Word | Tài Liệu Đỉnh`;
  const doiTuongText = doc.doiTuong === 'giaovien' ? 'Giáo viên' : 'Học sinh / Phụ huynh';

  let previewMarkup = '';
  const isValidDriveLink = /^https:\/\/(drive|docs)\.google\.com\/file\/d\/[a-zA-Z0-9_-]+/.test(doc.linkDemo || '');
  if (isValidDriveLink) {
    let embedUrl = doc.linkDemo;
    if (embedUrl.includes('/view')) embedUrl = embedUrl.replace('/view', '/preview');
    previewMarkup = `
      <div class="preview-card">
        <div class="preview-card__head">
          <h3>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            Bản xem thử trực tuyến (PDF mẫu)
          </h3>
          <a href="${escapeHTML(doc.linkDemo)}" target="_blank" rel="noopener" class="btn btn--outline" style="font-size:0.76rem; padding:5px 10px;">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Mở toàn màn hình
          </a>
        </div>
        <div class="preview-iframe-wrap">
          <iframe src="${escapeHTML(embedUrl)}" allow="autoplay" loading="lazy"></iframe>
        </div>
        <p style="font-size:0.75rem; color:#64748b; margin-top:8px;">* File Word (.docx) đầy đủ với toàn bộ bảng ma trận, câu hỏi và đáp án sẽ được gửi qua Zalo sau khi thống nhất.</p>
      </div>
    `;
  } else {
    previewMarkup = `
      <div class="preview-card">
        <div class="preview-empty-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          <h4>Bản xem thử trực tuyến hiện chưa cập nhật</h4>
          <p>Tài liệu này hiện chưa có liên kết xem thử trực tuyến. Quý thầy cô và các bạn vui lòng nhắn Zalo người phụ trách để nhận trích đoạn nội dung mẫu trước khi quyết định nhận file.</p>
          <a href="https://zalo.me/${CONFIG.ZALO_PHONE}" target="_blank" rel="noopener" class="btn btn--zalo">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Nhắn Zalo xin bản đọc thử
          </a>
        </div>
      </div>
    `;
  }

  // 3 Tài liệu liên quan cùng môn hoặc lớp
  const relatedDocs = danhSach
    .filter(d => d.ma !== doc.ma && (d.khoi === doc.khoi || d.mon === doc.mon))
    .slice(0, 3);

  const relatedHtml = relatedDocs.length > 0 ? `
    <div class="related-section">
      <h3>Tài liệu cùng chuyên môn liên quan</h3>
      <div class="grid">
        ${relatedDocs.map(d => renderCard(d, '../')).join('')}
      </div>
    </div>
  ` : '';

  container.innerHTML = `
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <a href="../">Trang chủ</a>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      <a href="../kho-tai-lieu/">Kho tài liệu</a>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      <span class="breadcrumb__current">${escapeHTML(doc.mon)} — ${escapeHTML(doc.khoi)}</span>
    </nav>

    <div class="detail-layout">
      <!-- Cột chính bên trái -->
      <div class="detail-main">
        <div class="detail-card">
          <div class="detail-header-badges">
            <span class="card__badge-docx">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              ${escapeHTML(doc.dinhDang || 'DOCX')}
            </span>
            <span class="tag tag--grade">${escapeHTML(doc.khoi)}</span>
            <span class="tag tag--subject">${escapeHTML(doc.mon)}</span>
            <span class="tag tag--audience">${doiTuongText}</span>
          </div>

          <h1 class="detail-title">${escapeHTML(doc.tieuDe)}</h1>
          <p class="detail-desc">${escapeHTML(doc.moTa)}</p>

          <h3 style="font-size:1.05rem; font-weight:700; color:var(--c-navy); margin-bottom:10px;">
            Thông số kỹ thuật & quy chuẩn tài liệu
          </h3>
          <table class="specs-table">
            <tbody>
              <tr>
                <th>Mã tài liệu</th>
                <td><code>${escapeHTML(doc.ma)}</code></td>
              </tr>
              <tr>
                <th>Cấp học & Khối lớp</th>
                <td>${escapeHTML(doc.capHoc)} · ${escapeHTML(doc.khoi)}</td>
              </tr>
              <tr>
                <th>Môn học</th>
                <td>${escapeHTML(doc.mon)}</td>
              </tr>
              <tr>
                <th>Bộ sách tương thích</th>
                <td>${escapeHTML(doc.boSach || 'Dùng chung GDPT 2018')}</td>
              </tr>
              <tr>
                <th>Căn cứ sư phạm</th>
                <td>${escapeHTML(doc.chuanCV || 'Chuẩn quy định hiện hành')}</td>
              </tr>
              <tr>
                <th>Tình trạng nội dung</th>
                <td>${escapeHTML(doc.maTranDapAn || 'Đầy đủ nội dung và đáp án')}</td>
              </tr>
              <tr>
                <th>Định dạng tệp</th>
                <td>Microsoft Word (.docx) — Có thể chỉnh sửa toàn bộ phông chữ, bảng biểu, công thức</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Khung xem thử -->
        ${previewMarkup}
      </div>

      <!-- Cột phụ bên phải: Báo giá & Nút Zalo -->
      <div class="detail-sidebar">
        <div class="pricing-card">
          <div class="pricing-badge">Học liệu Word tham khảo</div>
          <h2 class="pricing-title">Trao đổi & Báo giá qua Zalo</h2>
          <div class="pricing-notice">
            Website hoạt động theo mô hình giới thiệu và trao đổi trực tiếp. Để biết giá chi tiết và nhận file Word gốc, vui lòng liên hệ Zalo người phụ trách.
          </div>
          <div class="pricing-actions">
            <a href="https://zalo.me/${CONFIG.ZALO_PHONE}" target="_blank" rel="noopener" class="btn btn--zalo btn--full btn--lg">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              Nhắn Zalo hỏi tài liệu này
            </a>
            <button id="btn-copy-doc-info" class="btn btn--outline btn--full" data-ma="${encodeURIComponent(doc.ma)}" data-title="${encodeURIComponent(doc.tieuDe)}">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              Sao chép mã & thông tin
            </button>
          </div>
          <div class="pricing-hours">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Khung giờ hỗ trợ: <strong>${CONFIG.SUPPORT_HOURS}</strong>. Phản hồi tận tình trong giờ làm việc.</span>
          </div>
        </div>
      </div>
    </div>

    ${relatedHtml}
  `;

  const copyBtn = document.getElementById('btn-copy-doc-info');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyThongTinTaiLieu(decodeURIComponent(copyBtn.dataset.ma || ''), decodeURIComponent(copyBtn.dataset.title || ''));
    });
  }

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function copyThongTinTaiLieu(ma, tieuDe) {
  const text = `Xin chào Tài Liệu Đỉnh, tôi quan tâm đến tài liệu [${ma}] ${tieuDe}. Nhờ bạn tư vấn giúp tôi nhé!`;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Đã sao chép nội dung hỏi tài liệu!');
  }).catch(() => {
    showToast(`Mã tài liệu: ${ma}`);
  });
}

// ─── TRANG LIÊN HỆ & TRÌNH SOẠN YÊU CẦU (/lien-he/) ───
function initContactPage() {
  const roleSelect = document.getElementById('contact-role');
  const levelSelect = document.getElementById('contact-level');
  const gradeInput = document.getElementById('contact-grade');
  const subjectInput = document.getElementById('contact-subject');
  const bookSelect = document.getElementById('contact-book');
  const typeSelect = document.getElementById('contact-type');
  const noteInput = document.getElementById('contact-note');
  const previewBox = document.getElementById('contact-live-message');

  function updatePreview() {
    if (!previewBox) return;
    const role = roleSelect ? roleSelect.value : 'Giáo viên';
    const level = levelSelect ? levelSelect.value : 'THCS';
    const grade = gradeInput && gradeInput.value.trim() ? gradeInput.value.trim() : 'Lớp 7';
    const subject = subjectInput && subjectInput.value.trim() ? subjectInput.value.trim() : 'Toán';
    const book = bookSelect ? bookSelect.value : 'Kết nối tri thức';
    const type = typeSelect ? typeSelect.value : 'Kế hoạch bài dạy (CV 5512)';
    const note = noteInput && noteInput.value.trim() ? noteInput.value.trim() : 'Tôi cần trọn bộ cả năm';

    const msg = `Xin chào Tài Liệu Đỉnh,\nTôi là ${role}, hiện đang tìm tài liệu ${type} môn ${subject} (${grade} - ${level}).\nBộ sách dự kiến: ${book}.\nYêu cầu cụ thể: ${note}.\nNhờ bạn tư vấn nội dung, bản xem thử và cách nhận file Word nhé!`;
    previewBox.textContent = msg;
  }

  [roleSelect, levelSelect, gradeInput, subjectInput, bookSelect, typeSelect, noteInput].forEach(el => {
    if (el) {
      el.addEventListener('input', updatePreview);
      el.addEventListener('change', updatePreview);
    }
  });

  updatePreview();

  const copyBtn = document.getElementById('btn-copy-contact-msg');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const text = previewBox ? previewBox.textContent : '';
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        showToast('Đã sao chép nội dung tin nhắn!');
      }).catch(() => {
        showToast('Vui lòng chọn và sao chép thủ công.');
      });
    });
  }
}

// ─── TRANG HƯỚNG DẪN & FAQ ACCORDION (/huong-dan/) ───
function initGuidePage() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(q => {
    q.addEventListener('click', () => {
      const parent = q.closest('.faq-item');
      if (parent) {
        parent.classList.toggle('faq-item--open');
      }
    });
  });
}

// ─── TRANG CHỦ (HOME PAGE) ───
function initHomePage() {
  const grid = document.getElementById('home-featured-grid');
  if (grid) {
    // Lấy 6 tài liệu tiêu biểu (2 Tiểu học, 2 THCS, 2 THPT)
    const featured = [
      danhSach[0], // TH1 Toán
      danhSach[1], // TH1 Văn
      danhSach[12], // L6 Toán
      danhSach[13], // L6 Văn
      danhSach[32], // L10 Toán
      danhSach[33]  // L10 Văn
    ].filter(Boolean);
    grid.innerHTML = featured.map(d => renderCard(d, '')).join('');
    initMotionGraphics();
  }

  const heroSearchInput = document.getElementById('hero-search-input');
  if (heroSearchInput) {
    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const kw = heroSearchInput.value.trim();
        window.location.href = `kho-tai-lieu/?q=${encodeURIComponent(kw)}`;
      }
    });
  }
}

// ─── ĐỒNG BỘ NỀN TỪ GOOGLE SHEETS ───
window.handleSheetData = function(res) {
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

      // Xác định cấp học (Tiểu học, THCS, THPT)
      let cap = 'THPT';
      const rawLower = rawKhoi.toLowerCase();
      if (rawLower.includes('tiểu') || ['lớp 1', 'lớp 2', 'lớp 3', 'lớp 4', 'lớp 5'].some(l => rawLower.includes(l))) {
        cap = 'Tiểu học';
      } else if (['lớp 6', 'lớp 7', 'lớp 8', 'lớp 9'].some(l => rawLower.includes(l))) {
        cap = 'THCS';
      }

      // Chuẩn hóa môn
      let monChuan = rawMon;
      if (rawMon === 'Văn') monChuan = cap === 'Tiểu học' ? 'Tiếng Việt' : 'Ngữ văn';
      else if (rawMon === 'Anh') monChuan = 'Tiếng Anh';
      else if (rawMon === 'KHTN') monChuan = cap === 'Tiểu học' ? 'Khoa học' : 'Khoa học Tự nhiên';
      else if (rawMon === 'KHXH') monChuan = 'Lịch sử và Địa lý';

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
        linkDemo: rawDemo,
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
    console.warn('Google Sheets sync skipped:', err);
  }
};

function fetchGoogleSheetData() {
  if (!CONFIG.SHEET_ID) return;
  const script = document.createElement('script');
  script.src = `https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}/gviz/tq?tqx=responseHandler:handleSheetData`;
  script.onerror = () => {};
  document.head.appendChild(script);
}

// ─── HỆ THỐNG GIAO DIỆN SÁNG / TỐI TỰ ĐỘNG THEO KHUNG GIỜ (5h–19h: SÁNG, 19h–5h: TỐI) ───
function initTheme() {
  const calculateThemeByHour = () => {
    const hour = new Date().getHours();
    return (hour >= 5 && hour < 19) ? 'light' : 'dark';
  };

  const applyTheme = (theme, withTransition = false) => {
    if (withTransition) {
      document.documentElement.classList.add('theme-transitioning');
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
      }, 350);
    }
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Áp dụng theme chuẩn theo giờ hiện tại
  applyTheme(calculateThemeByHour(), false);

  // Xóa cài đặt cũ nếu có để tránh xung đột
  try {
    localStorage.removeItem('tld_theme');
  } catch (e) {}

  // Tự động kiểm tra mỗi phút: chuyển chế độ mượt mà khi qua mốc 5h hoặc 19h
  setInterval(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const expectedTheme = calculateThemeByHour();
    if (currentTheme !== expectedTheme) {
      applyTheme(expectedTheme, true);
    }
  }, 60000);
}

// ─── HIỆU ỨNG CHUYỂN ĐỘNG & MOTION GRAPHICS (APPLE INSPIRED) ───
let _revealObserver = null;
let _counterObserver = null;

function initMotionGraphics() {
  // 1. Tự động thêm class .reveal cho các section và card
  const autoRevealSelectors = [
    '.level-card',
    '.guide-step',
    '.card',
    '.feature-badge',
    '.faq-item',
    '.pricing-card',
    '.contact-card'
  ];

  autoRevealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, idx) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        const staggerClass = `reveal--delay-${(idx % 3) + 1}`;
        el.classList.add(staggerClass);
      }
    });
  });

  // 2. Tạo reveal observer chỉ 1 lần duy nhất (singleton)
  if (!_revealObserver) {
    if ('IntersectionObserver' in window) {
      _revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      });
    }
  }

  // 3. Luôn observe các phần tử reveal MỚI (chưa is-revealed) sau mỗi lần render
  if (_revealObserver) {
    document.querySelectorAll('.reveal:not(.is-revealed)').forEach(el => {
      _revealObserver.observe(el);
    });
  } else {
    // Fallback cho trình duyệt cũ
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-revealed'));
  }

  // 4. Counter observer cũng singleton, guard bằng data-counted attribute
  if (!_counterObserver && 'IntersectionObserver' in window) {
    _counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter'), 10);
          if (!isNaN(target)) {
            const duration = 1200;
            const startTime = performance.now();
            const suffix = el.getAttribute('data-suffix') || '';
            const prefix = el.getAttribute('data-prefix') || '';

            const step = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const current = Math.floor(ease * target);
              el.textContent = `${prefix}${current}${suffix}`;
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                el.textContent = `${prefix}${target}${suffix}`;
              }
            };
            requestAnimationFrame(step);
          }
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
  }

  // Observe counter elements mới (chưa được observe)
  if (_counterObserver) {
    document.querySelectorAll('[data-counter]:not([data-counted])').forEach(el => {
      el.setAttribute('data-counted', '1');
      _counterObserver.observe(el);
    });
  }
}

// ─── KHỞI TẠO TOÀN TRANG ───
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // 0. Khởi tạo Giao diện Sáng/Tối & Motion Graphics
  initTheme();
  initMotionGraphics();

  // Lắng nghe trạng thái tab (Page Visibility API) để tiết kiệm tài nguyên
  document.addEventListener('visibilitychange', () => {
    const state = document.hidden ? 'paused' : 'running';
    document.querySelectorAll('.hero, .shimmer-badge').forEach(el => {
      el.style.animationPlayState = state;
    });
  });

  // 1. Mobile Menu Toggle ở Header
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const navMobileMenu = document.getElementById('nav-mobile-menu');
  if (navToggleBtn && navMobileMenu) {
    navToggleBtn.addEventListener('click', () => {
      navMobileMenu.classList.toggle('nav-mobile--open');
    });
  }

  // 2. Định tuyến theo từng trang
  if (path.includes('/kho-tai-lieu')) {
    loadStateFromURL();
    renderFilterChips();

    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear-btn');
    if (searchClear) {
      searchClear.style.display = filterState.tuKhoa ? 'flex' : 'none';
      searchClear.addEventListener('click', xoaTuKhoa);
    }
    if (searchInput) {
      if (filterState.tuKhoa) searchInput.value = filterState.tuKhoa;
      searchInput.addEventListener('input', (e) => {
        filterState.tuKhoa = e.target.value;
        if (searchClear) searchClear.style.display = filterState.tuKhoa ? 'flex' : 'none';
        capNhatGiaoDienKho();
      });
    }

    capNhatGiaoDienKho();
  } else if (path.includes('/tai-lieu')) {
    initDetailPage();
  } else if (path.includes('/lien-he')) {
    initContactPage();
  } else if (path.includes('/huong-dan')) {
    initGuidePage();
  } else {
    initHomePage();
  }

  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  fetchGoogleSheetData();
});
