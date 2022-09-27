import MediaPlayer from '@roguesquid/platzimediaplayer';
import AutoPlay from '@roguesquid/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@roguesquid/platzimediaplayer/lib/plugins/AutoPause';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const playButton: HTMLElement | null = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement | null = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  })
}