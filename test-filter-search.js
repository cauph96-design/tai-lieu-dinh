/**
 * TÀI LIỆU ĐỈNH — AUTOMATED TEST SUITE CHO BỘ LỌC VÀ TÌM KIẾM
 * Chạy trên Mac: /System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc test-filter-search.js
 */

// Mock Web & DOM Environment for headless JavaScriptCore testing
function URLSearchParams(init) {
  this._map = {};
  if (init && typeof init === 'string') {
    var str = init.replace(/^\?/, '');
    var pairs = str.split('&');
    for (var i = 0; i < pairs.length; i++) {
      var p = pairs[i].split('=');
      if (p[0]) this._map[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || '');
    }
  }
}
URLSearchParams.prototype.get = function(k) { return this._map[k] || null; };
URLSearchParams.prototype.set = function(k, v) { this._map[k] = String(v); };
URLSearchParams.prototype.toString = function() {
  var self = this;
  return Object.keys(this._map).map(function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(self._map[k]); }).join('&');
};

var window = { location: { pathname: '/kho-tai-lieu', search: '' }, history: { replaceState: function(){} } };
var document = {
  addEventListener: function(){},
  getElementById: function(){ return { addEventListener: function(){}, classList: { add: function(){}, remove: function(){}, toggle: function(){} }, style: {} }; },
  querySelectorAll: function(){ return []; },
  title: ''
};
var navigator = { clipboard: { writeText: function(){ return Promise.resolve(); } } };
var setTimeout = function(fn){ return 1; };
var clearTimeout = function(id){};

load('script.js');

function assert(condition, message) {
  if (!condition) {
    throw new Error('❌ TEST FAILED: ' + message);
  }
}

print('========================================================');
print('🚀 BẮT ĐẦU TEST TOÀN DIỆN: TÀI LIỆU ĐỈNH (10 TEST CASES)');
print('========================================================');

// Test 1: Ban đầu có đúng 66 tài liệu
assert(danhSach.length === 66, 'Số lượng tài liệu ban đầu phải là 66, thực tế: ' + danhSach.length);
print('✅ PASS 1: Đủ 66 tài liệu mẫu chuẩn lớp 1-12');

// Test 2: Lọc theo Cấp học THCS
datLaiBoLoc();
chonCapHoc('THCS');
var resTHCS = filterDocuments();
assert(resTHCS.length === 20, 'THCS phải có 20 tài liệu, thực tế: ' + resTHCS.length);
assert(resTHCS.every(function(d){ return d.capHoc === 'THCS'; }), 'Tất cả phải là THCS');
print('✅ PASS 2: Lọc cấp học THCS chính xác (20 tài liệu)');

// Test 3: Lọc Khối 9 (nằm trong THCS) -> thỏa mãn cả 2 điều kiện (AND giữa cấp và khối)
toggleKhoi('Lớp 9');
var resTHCS_L9 = filterDocuments();
assert(resTHCS_L9.length === 5, 'Khối 9 THCS phải có 5 tài liệu, thực tế: ' + resTHCS_L9.length);
assert(resTHCS_L9.every(function(d){ return d.khoi === 'Lớp 9' && d.capHoc === 'THCS'; }), 'Phải đúng Lớp 9 THCS');
print('✅ PASS 3: Kết hợp cả Cấp THCS và Lớp 9 (AND giữa 2 nhóm) chuẩn xác');

// Test 4: OR trong cùng nhóm khối lớp: Chọn Lớp 9 VÀ Lớp 12
toggleKhoi('Lớp 12');
var resL9_L12 = filterDocuments();
assert(resL9_L12.length === 13, 'Lớp 9 (5) + Lớp 12 (8) phải là 13 tài liệu, thực tế: ' + resL9_L12.length);
assert(resL9_L12.every(function(d){ return d.khoi === 'Lớp 9' || d.khoi === 'Lớp 12'; }), 'Chỉ chứa Lớp 9 hoặc Lớp 12');
print('✅ PASS 4: Chọn nhiều khối lớp đồng thời (OR trong cùng nhóm) chuẩn xác (13 tài liệu)');

// Test 5: Invalidation môn học khi đổi cấp / khối
datLaiBoLoc();
chonCapHoc('THPT');
toggleMon('Vật lý');
assert(filterState.mon.has('Vật lý'), 'Môn Vật lý phải có trong filterState');
chonCapHoc('Tiểu học');
assert(!filterState.mon.has('Vật lý'), 'Vật lý phải bị tự động loại khỏi môn khi chuyển sang Tiểu học');
print('✅ PASS 5: Tự động loại bỏ môn học không hợp lệ khi đổi cấp học (sanitizeSubjects)');

// Test 6: Tìm kiếm alias KHTN 6
datLaiBoLoc();
filterState.tuKhoa = 'khtn 6';
var resKHTN6 = filterDocuments();
assert(resKHTN6.length === 1, 'KHTN 6 phải có đúng 1 tài liệu, thực tế: ' + resKHTN6.length);
assert(resKHTN6[0].ma === 'THCS6-KHTN-26', 'Phải đúng mã THCS6-KHTN-26');
print('✅ PASS 6: Tìm kiếm alias "khtn 6" chính xác tuyệt đối, không nhận nhầm số trong id hay công văn');

// Test 7: Phân biệt Lý vs Địa lý
datLaiBoLoc();
filterState.tuKhoa = 'Lý 10';
var resLy10 = filterDocuments();
assert(resLy10.length === 1, 'Lý 10 phải đúng 1 tài liệu Vật lý 10, thực tế: ' + resLy10.length);
assert(resLy10[0].mon === 'Vật lý', 'Phải là môn Vật lý, không được nhầm sang Địa lý');
print('✅ PASS 7: Phân biệt "Lý 10" chuẩn xác môn Vật lý, không nhầm sang Địa lý');

// Test 8: Tìm kiếm tiếng Việt không dấu: "de kiem tra toan 12"
datLaiBoLoc();
filterState.tuKhoa = 'de kiem tra toan 12';
var resDeToan12 = filterDocuments();
assert(resDeToan12.length >= 1, 'Phải tìm thấy đề kiểm tra Toán 12');
assert(resDeToan12[0].khoi === 'Lớp 12' && resDeToan12[0].mon === 'Toán', 'Top result phải là Toán 12');
print('✅ PASS 8: Tìm kiếm tiếng Việt không dấu và sắp xếp theo độ liên quan chính xác');

// Test 9: Trạng thái không có kết quả
datLaiBoLoc();
filterState.tuKhoa = 'tài liệu siêu hiếm không tồn tại 999';
var resEmpty = filterDocuments();
assert(resEmpty.length === 0, 'Phải trả về 0 kết quả');
print('✅ PASS 9: Trả về 0 kết quả rõ ràng khi không khớp');

// Test 10: Xóa URL params rác
window.location.search = '?cap=RandomCap&khoi=Lop99&sort=hack&mon=MonAo';
loadStateFromURL();
assert(filterState.cap === '', 'Cấp rác phải bị reset về rỗng');
assert(filterState.khoi.size === 0, 'Khối rác phải bị loại');
assert(filterState.mon.size === 0, 'Môn rác phải bị loại');
assert(filterState.sort === 'default', 'Sort rác phải về default');
print('✅ PASS 10: Khử sạch tham số URL không hợp lệ, bảo vệ an toàn cho bộ lọc');

print('========================================================');
print('🎉 KẾT QUẢ: 10/10 TEST CASES ĐẠT CHUẨN XUẤT SẮC! 🎉');
print('========================================================');
