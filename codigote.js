const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  const itemsPerView = window.innerWidth <= 768 ? 2 : 4;
  if (index < items.length - itemsPerView) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

window.addEventListener("resize", updateCarousel);
updateCarousel();
