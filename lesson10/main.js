$(document).ready(() => {
  $("#container").before("<p>above container</p>");
  $("#container").prepend("<p>whatever</p>").append("A new paragraph");
  $("#container").append("<p>A new paragraph</p>", "<p>Another paragraph</p>");
  $("#container").after("<p>below container</p>");

  let createEl = document.createElement("p");
  createEl.innerHTML = "New p element"
  $("#container").append(createEl);
});
