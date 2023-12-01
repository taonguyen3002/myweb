// Lấy tất cả các thẻ a trong trang web
var links = document.getElementsByTagName("a");
// Duyệt qua từng thẻ a
for (var i = 0; i < links.length; i++) {
  // Lấy thuộc tính href của thẻ a
  var link = links[i].href;
  // Kiểm tra xem thuộc tính href có kết thúc bằng .html hay không
  if (link.endsWith(".html")) {
    // Nếu có, thì cắt bỏ phần .html khỏi thuộc tính href
    links[i].href = link.slice(0, -5);
  }
}
