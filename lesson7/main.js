$(document).ready(() => {
  $(".content-box").click(function () {
    $(".content-box")
      .animate(
        {
          width: "500px",
          height: "400px",
        },
        3000
      )
      .animate(
        {
          fontSize: "30px",
        },
        3000
      )
      .fadeOut(3000);

    $("button").click(function () {
      $(".content-box").stop(true, true);//makes the animation happen instantly
      //stop(): stop animation running
      //stop(true): stop all animations
    });
  });
});
