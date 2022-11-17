// let offset = 0; // змішення зліва
// const sliderLine = document.querySelector('.slider__line');

// document.querySelector('.slider-next').addEventListener('click', function () {
//     offset = offset + 230; // offset += 230
//     if (offset > 920) {
//         offset = 0;
//     }
//     sliderLine.style.left = - offset + 'px';
// }); 

// document.querySelector('.slider-prev').addEventListener('click', function () {
//     offset = offset - 230; // offset -= 230
//     if (offset < 0) {
//         offset = 920;
//       }
//     sliderLine.style.left = - offset + 'px';
// }); 


  const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

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
    if (!isDown) return;  // stop the fn from running
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
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });