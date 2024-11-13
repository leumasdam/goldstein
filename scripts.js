// JavaScript for Carousel

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = 0;

  // Clone the first few items to create a looping effect
  function cloneItems() {
      for (let i = 0; i < 5; i++) {
          let clone = items[i].cloneNode(true);
          carousel.appendChild(clone);
      }
  }

  cloneItems();

 