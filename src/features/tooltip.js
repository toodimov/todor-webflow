import $ from "jquery";

function initTooltip() {
  if (!$(".tooltip").length) {
    return;
  }
  setTimeout(function () {
    $(".tooltip").hover(
      function () {
        // over
        $(this).addClass("is--hovered");
      },
      function () {
        // and out
        $(this).removeClass("is--hovered");
      }
    );
  }, 1000);
}
export default initTooltip;
