import $ from "jquery";

function initDropdown() {
  if (!$(".dropdown").length) {
    return;
  }
  $(".dropdown__header").on("click", function () {
    $(this).children(".dropdown__icon").toggleClass("is--active");
    $(".dropdown__icon").not($(this).children(".dropdown__icon")).removeClass("is--active");
    $(this).next().slideToggle(300);
    $(".dropdown__body").not($(this).next()).slideUp("fast");
  });
}
export default initDropdown;
