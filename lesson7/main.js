$(document).ready(() => {
  const page_url = window.location.href;
  const page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
  console.log(page_id);
  if (page_id == "section3") {
    $("html, body").animate(
      {
        scrollTop: $("#scroll-" + page_id).offset().top,
      },
      1000
    );
  } else if (page_id == "post") {
    $("html, body").animate(
      {
        scrollTop: $("#scroll-" + page_id).offset().top,
      },
      1000
    );
  }
});
