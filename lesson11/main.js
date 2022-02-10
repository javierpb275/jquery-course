$(document).ready(() => {
  $("p").css({ "background-color": "red" });

  $(".first").mouseenter(function () {
    $("#second").hide();
  });

  $(".first").mouseleave(function () {
    $("#second").show();
  });

  $(".second").mouseleave(function () {
    $("#third").remove();
  });

  $("button").empty();

  $("h1").addClass("whatever-from-css");
  $("h1").removeClass("whatever-from-css");
  $("h1").toggleClass("whatever-from-css");
});
