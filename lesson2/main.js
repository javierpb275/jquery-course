$(document).ready(() => {
  $("#p1").hover(function () {
    $(this).hide();
  });
  $("#p2").click(function () {
    $(this).hide();
  });
  $("#p3").dblclick(function () {
    $(this).hide();
  });
  $("#p4").mouseout(function () {
    $(this).hide();
  });
});
