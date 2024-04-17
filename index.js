var firstIndex = 0;

function automaticSlide() {
  setTimeout(automaticSlide, 10000); // Update the transition time to 10 seconds (10000 milliseconds)

  // Update the following lines to target images using their IDs
  var img = [document.getElementById('slide-1'), document.getElementById('slide-2'), document.getElementById('slide-3')];

  for (let pics = 0; pics < img.length; pics++) {
    img[pics].style.transition = "opacity 1s ease-in-out";
    img[pics].style.opacity = "0";
    img[pics].classList.remove('active');
  }

  img[firstIndex].style.opacity = "1";
  img[firstIndex].classList.add('active');

  firstIndex++;
  if (firstIndex >= img.length) {
    firstIndex = 0;
  }
}

automaticSlide();
