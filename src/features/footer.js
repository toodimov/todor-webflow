import $ from 'jquery'

import initFooterMarquee from './footerMarque'
import initTimeZone from './timeZone'

function initFooter() {
  $('#footerYear').text(new Date().getFullYear())

  initFooterMarquee()
  initTimeZone()
}

export default initFooter
