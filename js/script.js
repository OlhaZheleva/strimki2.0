  // sliders 
  const sliders = document.querySelectorAll('.slider');
  let isDown = false;
  let startX;
  let scrollLeft;

sliders.forEach((slider) => {
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log("erreerre", scrollLeft)
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;

    console.log('sdsd', scrollLeft)
    console.log(slider.scrollLeft)
  });

  //   touchEvents

  slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('touchcancel', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
  
});









  // video block

  function myFunction() {
      document.getElementById("video").innerHTML = "<div id='player'></div>";

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;

  function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'ZJMmManAKzI',
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
          }
      });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
      event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;

  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
          //setTimeout(stopVideo, 6000);
          done = true;
      }
  }

  function stopVideo() {
      player.stopVideo();
  }