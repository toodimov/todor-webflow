import Plyr from "plyr";

function initVideoPlyr() {
  const player = new Plyr("#player", {});

  // Expose player so it can be used from the console
  window.player = player;
}
export default initVideoPlyr;
