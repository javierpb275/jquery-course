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

  let menuTrigger = true;
  $(document).keypress((e) => {
    if (e.which == 13) {
      if (menuTrigger === false) {
        $("nav").fadeIn(500);
        menuTrigger = true;
      } else if (menuTrigger === true) {
        $("nav").fadeOut(500);
        menuTrigger = false;
      }
    }
  });
});
