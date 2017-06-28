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

const videoPlayer = document.getElementsByTagName('video');
const span = document.querySelectorAll('.context span');


function removeClass(array) {
  for (let i = 0; i < array.length; i += 1)
    array[i].className = '';
};

videoPlayer.addEventListener('timeupdate', (e) => {
  let videoTime = videoPlayer.currentTime;

  removeClass(span);

  for (let i = 0; i < span.length; i += 1) {
    let caption = span[i];
    let captionTime = span[i].getAttribute('data-time');

    if (captionTime > videoTime)
      caption.className = 'highlight';
      break;
  }
});
