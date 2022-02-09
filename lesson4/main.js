$(document).ready(() => {
  $("#menu-toggle").click(function () {
    //slideUp and slideDown
    $("#side-nav").slideToggle(1000);
  });

  $(".info-title").click(function () {
    $(".info-content").slideToggle("slow", () => {
      alert("hi there")
    });
  });
});
