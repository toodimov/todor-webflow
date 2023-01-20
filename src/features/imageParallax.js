import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import $ from "jquery";
gsap.registerPlugin(ScrollTrigger);

function initImageParallax() {
  if (!$(".with-parallax").length) {
    return;
  }

  // console.log('Init Image Parallax')

  gsap.utils.toArray(".with-parallax").forEach((section) => {
    const image = section.querySelector("img");

    // gsap.set(image, {
    //   y: "-5%",
    // });

    gsap.to(image, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        scrub: true,
      },
    });
  });
}

export default initImageParallax;
