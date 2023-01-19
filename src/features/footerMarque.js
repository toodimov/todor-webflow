import gsap from 'gsap'
import $ from 'jquery'

function initFooterMarquee() {
  if (!$('.footer__marquee').length) {
    return
  }

  $('.footer__marquee').each(function () {
    let track = $(this).find('.footer__marquee__track')
    let items = $(this).find('.footer__marquee__item')

    let tl = gsap.timeline({
      repeat: -1,
      defaults: {
        duration: 1,
        delay: 1,
        ease: 'expo.inOut',
      },
    })

    items.each(function (index) {
      let i = index + 1
      let distance = i * -100
      tl.to(track, { yPercent: distance })
    })

    items.first().clone().appendTo(track)
  })
}

export default initFooterMarquee
