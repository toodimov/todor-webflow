import $ from "jquery";

function initVimeoPlayPauze() {
  // Full controls
  // https://codepen.io/simpson77/pen/YXowmy

  $("[data-vimeo-player-target]").each(function (index) {
    var playerID = $(this);

    var videoIndexID = "vimeo-player-index-" + index;
    $(this).attr("id", videoIndexID);

    var iframe = $(this).attr("id");
    var player = new Vimeo.Player(iframe);

    player.setVolume(1);

    // Loaded
    player.on("play", function () {
      playerID.attr("data-vimeo-status-loaded", "true");
    });

    // Play
    playerID.find('[data-vimeo-control="play"]').click(function () {
      playerID.attr("data-vimeo-status-activated", "true");
      playerID.attr("data-vimeo-status-play", "true");
      player.play();
    });

    // Pause
    playerID.find('[data-vimeo-control="pause"]').click(function () {
      playerID.attr("data-vimeo-status-play", "false");
      player.pause();
    });

    // Mute
    playerID.find('[data-vimeo-control="mute"]').click(function () {
      if (playerID.attr("data-vimeo-status-muted") == "false") {
        player.setVolume(0);
        playerID.attr("data-vimeo-status-muted", "true");
      } else {
        player.setVolume(1);
        playerID.attr("data-vimeo-status-muted", "false");
      }
    });

    // Convert number into seconds & hrs
    // https://stackoverflow.com/questions/11792726/turn-seconds-into-hms-format-using-jquery
    function secondsTimeSpanToHMS(s) {
      var h = Math.floor(s / 3600); //Get whole hours
      s -= h * 3600;
      var m = Math.floor(s / 60); //Get remaining minutes
      s -= m * 60;
      return m + ":" + (s < 10 ? "0" + s : s); //zero padding on minutes and seconds
    }

    // Progress Time
    var vimeoTime = playerID.find(".vimeo-duration .time");
    player.on("timeupdate", function (data) {
      vimeoTime.text(secondsTimeSpanToHMS(Math.trunc(data.seconds)));
    });

    // Duration

    var vimeoDuration = playerID.find(".vimeo-duration .duration");
    player
      .getDuration()
      .then(function (duration) {
        vimeoDuration.text(secondsTimeSpanToHMS(duration));
      })
      .catch(function (error) {
        // an error occurred
      });

    // Ended
    var onEnd = function () {
      playerID.attr("data-vimeo-status-activated", "false");
      playerID.attr("data-vimeo-status-play", "false");
      player.unload();
    };

    player.on("ended", onEnd);
  });
}

export default initVimeoPlayPauze;
