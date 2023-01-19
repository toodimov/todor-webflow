import $ from 'jquery'

function initStickyNavigation() {
  function stickyNavigation() {
    if ($(window).scrollTop() > 50) {
      $('.navbar').addClass('cc-sticky-nav')
    } else {
      $('.navbar').removeClass('cc-sticky-nav')
    }
  }

  $(window).scroll(function () {
    stickyNavigation()
  })
}

export default initStickyNavigation
