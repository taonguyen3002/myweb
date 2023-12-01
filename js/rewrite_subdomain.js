document.addEventListener("DOMContentLoaded", function () {
  var currentPath = window.location.pathname;
  if (currentPath.endsWith(".html") && currentPath !== "/index.html") {
    var newPath = currentPath.slice(0, -5); // Loại bỏ ".html"
    window.location.replace(newPath);
  }
});
