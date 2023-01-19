import gsap from 'gsap'
import $ from 'jquery'

function initCursor() {
  $('[cursor-text]').on('mouseenter', function () {
    let randomNumber = gsap.utils.random(-10, 10)
    $('.cursor__tag').css('transform', `rotate(${randomNumber}deg)`)
    let cursorText = $(this).attr('cursor-text')
    $('.cursor__text').text(cursorText)
    $('.cursor').css('opacity', '1')
  })

  $('[cursor-text]').on('mouseleave', function () {
    $('.cursor').css('opacity', '0')
  })
}

export default initCursor
