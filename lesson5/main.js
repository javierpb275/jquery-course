$(document).ready(() => {
  $(".content-box").click(function () {
    $(".content-box").animate(
      {
        width: "500px",
        height: "+=200px",
      },
      1000,
      alert("it works")
    );
    $(".content-after").show().animate(
      {
        opacity: "1",
      },
      3000
    );
  });
});
