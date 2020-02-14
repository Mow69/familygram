$(function() {
  $(".iconInput i").click(function() {
    $(this).toggleClass("fa-eye-slash");
    $(this).toggleClass("fa-eye");
    if ($(this).hasClass("fa-eye")) {
      $(this)
        .prev()
        .attr("type", "text");
    } else {
      $(this)
        .prev()
        .attr("type", "password");
    }
  });
});

function setImgGrig(n) {
  $(".gridImg")
    .removeClass("row-cols-1")
    .removeClass("row-cols-2")
    .removeClass("row-cols-3")
    .addClass("row-cols-" + n);
}
