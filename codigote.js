<script>
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

nextBtn.addEventListener("click", () => {
  const itemsPerView = window.innerWidth <= 768 ? 2 : 4;
  const totalItems = track.children.length;
  const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

  if (index < maxIndex) {
    index++;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
});
</script>
