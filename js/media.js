//////////////////////////////////////////
// Media Player
//////////////////////////////////////////

$('video').mediaelementplayer({
  features: ['playpause','current', 'progress', 'volume', 'fullscreen'],
  videoHeight: "100%",
  videoWidth: "100%",
  startLanguage: 'en',
  poster: './img/logo3.jpg',
  showPosterWhenEnded: 'true',
});

const videoPlayer = document.querySelectorAll('video');
const span = document.querySelectorAll('.context span');
