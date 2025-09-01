const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (index < items.length - 4) index++; 
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();
