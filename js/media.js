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

const videoPlayer = document.querySelector('video');
const span = document.querySelectorAll('.context span');

// Removes all classes from each span element as the videoTime updates.

function removeClass(array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i].className = "";
  }
}

// As the videoTime updates, class 'highlight' is being applied to the related span elements with the correct data-times.

videoPlayer.addEventListener('timeupdate', (e) => {
  let videoTime = videoPlayer.currentTime;

  removeClass(span);

  for (let i = 0; i < span.length; i += 1) {
    let caption = span[i];
    let captionTime = caption.getAttribute('data-time');

    if (captionTime > videoTime) {
      caption.className = 'highlight';
      break;
    }
  }
});

// Allows user to click directly on text to be taken to a specific part of video.

for (let i = 0; i < span.length;  i += 1) {
  // Each data-time is set to be the begining video time of the following span element.
  let caption = span[i-1];
  // Add's a listener to each span element.
  span[i].addEventListener('click', (e) => {
    // If there is no previous data-time, start from the begining of the video.
    if (caption == null) {
      videoPlayer.currentTime = 0;
    } else {
      // Video Time is the previous span element's data-time (end-time)
      videoPlayer.currentTime = caption.getAttribute('data-time');
    }
  });
}
