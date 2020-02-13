$(function() {

// function pour rendre visible ou cache le password au clic :
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
