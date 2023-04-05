// play pause
const playButton = document.getElementById('play-arrow');
let isPlaying = false;
playButton.addEventListener('click', () => {
  const video = document.getElementById('video-src');

  if (isPlaying) {
    video.pause();
    playButton.innerText = 'play_arrow';
  } else {
    video.play();
    playButton.innerText = 'pause';
  }

  isPlaying = !isPlaying;
});

// mute unmute
const volUp = document.getElementById('vol-up');
let isSound = false;
volUp.addEventListener('click', () => {
  const videoSound = document.getElementById('video-src');

  if (isSound) {
    videoSound.volume = 1;
    volUp.innerText = 'volume_up';
  } else {
    videoSound.volume = 0;
    volUp.innerText = 'volume_off';
  }

  isSound = !isSound;
});

// on video click pause and play
const videoClickPause = document.getElementById('video-src');
let pauseClick = false;
videoClickPause.addEventListener('click', () => {
  if (pauseClick) {
    videoClickPause.pause();
    playButton.innerText = 'play_arrow';
  } else {
    videoClickPause.play();
    playButton.innerText = 'pause';
  }
  pauseClick = !pauseClick;
});

//setting toggle
const settingButton = document.querySelector('#settings-button');
const hideClass = document.querySelector('.setting-hide');
settingButton.addEventListener('click', () => {
  hideClass.classList.toggle('hide-s');
});
