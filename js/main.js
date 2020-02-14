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

  // Anime la progression (via l'augmentation du width) de la barre de chargement
  $("#loading").on("shown.bs.modal", function(e) {
    $("#loading .progress-bar").animate(
      { width: "100%" },
      3000,
      // Redirige vers medias-config au bout de 3sec
      function() {
        location.href = "media-config.html";
      }
    );
  });

  // Permet le retour à 0 de la valeur du width quand la modal est hidden
  $("#loading").on("hidden.bs.modal", function(e) {
    $("#loading .progress-bar").css("width", "0%");
  });
});

function setImgGrig(n) {
  $(".gridImg")
    .removeClass("row-cols-1")
    .removeClass("row-cols-2")
    .removeClass("row-cols-3")
    .addClass("row-cols-" + n);
}
