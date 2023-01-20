// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import $ from "jquery";

// gsap.registerPlugin(ScrollTrigger);

// import initCursor from './features/cursor'
// import initFooter from './features/footer'
// import initFooterMarquee from './features/footerMarque'
// import initStickyNavigation from './features/navigation'
// import initRandomPx from './features/randomPixel'
import initSmoothScroll from "./features/smootScroll";

import initImageParallax from "./features/imageParallax";
import initDropdown from "./features/dropdown";
import initTooltip from "./features/tooltip";
import initShare from "./features/share";

import "./styles/style.css";

// function initMarquee() {
//   if (!$('[marquee]').length) {
//     return
//   }
//   $('[marquee]').each(function () {
//     let direction = 1
//     let speed = 25
//     let playState = false

//     let marqueeTl = gsap.timeline({
//       paused: playState,
//       repeat: -1,
//       onReverseComplete: () => {
//         marqueeTl.progress(1)
//       },
//     })

//     marqueeTl.to($(this), { xPercent: -100, ease: 'none', duration: speed })

//     ScrollTrigger.create({
//       trigger: 'body',
//       start: 'top top',
//       end: 'bottom bottom',
//       onUpdate: (self) => {
//         direction = self.direction
//         marqueeTl.timeScale(self.direction)
//       },
//     })
//   })
// }

// // Init Scripts
initSmoothScroll();
// initCursor()
// initStickyNavigation()
initImageParallax();
// initMarquee()
// initRandomPx()
// initFooter()

initDropdown();
initTooltip();
initShare();
