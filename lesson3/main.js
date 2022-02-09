$(document).ready(() => {
    $("#menu-toggle").click(function () {
        $("#side-nav").toggle(1000, () => {
            alert("hi there")
        });
    });
});