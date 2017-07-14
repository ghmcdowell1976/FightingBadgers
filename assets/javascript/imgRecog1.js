<<<<<<< HEAD
 var video = document.querySelector('video');
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var localMediaStream = null;
=======
"use strict"
$(document).ready(function(){

	var video = document.querySelector('video');
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext('2d');
	var localMediaStream = null;
>>>>>>> de67abae5405ca4c3d724090b55397e952ecfac5

  function errorCallback(e) {
    console.log(e);
  }
  function snapshot() {
    if (localMediaStream) {
      ctx.drawImage(video, 0, 0);
      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      document.querySelector('img').src = canvas.toDataURL('image/webp');
    }
  }

  video.addEventListener('click', snapshot, false);
<<<<<<< HEAD
  ///we need to set the event lsitener to the capture-btn
=======
>>>>>>> de67abae5405ca4c3d724090b55397e952ecfac5

  // Not showing vendor prefixes or code that works cross-browser.
  navigator.getUserMedia({video: true}, function(stream) {
    video.src = window.URL.createObjectURL(stream);
    localMediaStream = stream;
<<<<<<< HEAD
  }, errorCallback);
=======
  }, errorCallback);

});
>>>>>>> de67abae5405ca4c3d724090b55397e952ecfac5
