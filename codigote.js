const slideContainer = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  if(index < 0) {
    currentIndex = totalSlides - 1;
  } else if(index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
  resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
  resetAutoSlide();
});

let autoSlideInterval = setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 5000);
}

showSlide(currentIndex);
