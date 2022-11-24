  const slider2 = document.querySelector('.partners__slider_desck');
  let isDown2 = false;
  let startX2;
  let scrollLeft2;

  slider2.addEventListener('mousedown', (e) => {
    isDown2 = true;
    slider2.classList.add('active');
    startX2 = e.pageX - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft2;
    console.log("erreerre", scrollLeft2)
  });

  slider2.addEventListener('mouseleave', () => {
    isDown2 = false;
    slider2.classList.remove('active');
  });

  slider2.addEventListener('mouseup', () => {
    isDown2 = false;
    slider2.classList.remove('active');
  });

  slider2.addEventListener('mousemove', (e) => {
    if (!isDown2) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x - startX2) * 2;
    slider2.scrollLeft2 = scrollLeft2 - walk;
    
    console.log('sdsd', scrollLeft2)
    console.log(slider2.scrollLeft2)
  });


//   touchEvents

  slider2.addEventListener('touchstart', (e) => {
    isDown2 = true;
    slider2.classList.add('active');
    startX2 = e.pageX - slider2.offsetLeft;
    scrollLeft2 = slider2.scrollLeft2;
  });

  slider2.addEventListener('touchend', () => {
    isDown2 = false;
    slider2.classList.remove('active');
  });

  slider2.addEventListener('touchcancel', () => {
    isDown2 = false;
    slider2.classList.remove('active');
  });

  slider2.addEventListener('touchmove', (e) => {
    if (!isDown2) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider2.offsetLeft;
    const walk = (x - startX2) * 2;
    slider2.scrollLeft2 = scrollLeft2 - walk;
  });


 
