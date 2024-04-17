var firstIndex = 0;
function automaticSlide() {
  setTimeout(automaticSlide, 5000); // Update the transition time to 5 seconds (5000 milliseconds)

  // Update the following lines to target images using their IDs
  var img = [document.getElementById('slide-1'), document.getElementById('slide-2'), document.getElementById('slide-3')];

  for (let pics = 0; pics < img.length; pics++) {
    img[pics].style.display = "none";
  }

  firstIndex++;
  if (firstIndex >= img.length) {
    firstIndex = 0;
  }

  img[firstIndex].style.display = "block";
}

automaticSlide();
