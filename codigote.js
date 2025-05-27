document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".carousel-slide");
  const slides = document.querySelectorAll(".carousel-image");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slideContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  // Opcional: avance automático cada 5 segundos
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);
});
