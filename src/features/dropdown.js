import $ from "jquery";

function initDropdown() {
  if (!$(".dropdown").length) {
    return;
  }
  $(".dropdown__header").on("click", function () {
    $(this).children(".dropdown__icon").toggleClass("cc-active");
    $(".dropdown__icon").not($(this).children(".dropdown__icon")).removeClass("cc-active");
    $(this).next().slideToggle(300);
    $(".dropdown__body").not($(this).next()).slideUp("fast");
  });
}
export default initDropdown;
