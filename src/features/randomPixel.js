import $ from 'jquery'

function initRandomPx() {
  if (!$('.px-box').length) {
    return
  }

  $('.px-box').each(function () {
    var randomnumber, pxItems
    const randomArray = []

    pxItems = $(this).find('.px-box__item')
    randomnumber = randomInt(5, 16)

    for (let i = 0; i < randomnumber; i++) {
      randomArray.push(Math.floor(Math.random() * 14) + 2)
    }
    randomArray.forEach(function (px) {
      pxItems[px] && pxItems[px].classList.add('on')
    })
  })

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
export default initRandomPx
