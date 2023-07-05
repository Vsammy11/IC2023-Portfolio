// Get all slide elements
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the slide at the specified index
  slides[index].style.display = 'block';
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Display the first slide
showSlide(currentIndex);

// Automatically transition to the next slide every 3 seconds
setInterval(nextSlide, 3000);
