const hamburgerMenu = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('DOMContentLoaded', (event) => {
  let carousel = document.querySelector('.carousel');
  let items = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  let totalItems = items.length;

  // Clone the first few items to create the continuous loop effect
  function cloneItems() {
      let firstItems = Array.from(items).slice(0, 5); // Clone the first 5 items
      firstItems.forEach(item => {
          let clone = item.cloneNode(true);
          carousel.appendChild(clone);
      });
      items = document.querySelectorAll('.carousel-item'); // Re-query the items
  }

  // Function to move the carousel
  function moveCarousel() {
      // Ensure that the items exist and have width
      if (items.length > 0) {
          let itemWidth = items[0].clientWidth + 10; // Width + margin
          let offset = -currentIndex * itemWidth;
          
          carousel.style.transition = 'transform 1s ease'; // Smooth transition for the sliding effect
          carousel.style.transform = `translateX(${offset}px)`;

          // Check if the first item is out of view (after it slides left)
          if (currentIndex >= totalItems) {
              // Reset the carousel position and remove the first item
              setTimeout(() => {
                  carousel.style.transition = 'none'; // Disable transition to reset the position instantly
                  carousel.style.transform = `translateX(0)`;
                  // Move the first item to the end of the carousel
                  let firstItem = carousel.querySelector('.carousel-item');
                  carousel.appendChild(firstItem);
                  items = document.querySelectorAll('.carousel-item'); // Re-query the items
                  currentIndex = 0; // Reset index to the start
              }, 1000); // Wait for the transition to finish before resetting
          } else {
              currentIndex++;
          }
      }
  }

  // Clone items initially to create seamless effect
  cloneItems();

  // Set the carousel to move every 3 seconds
  setInterval(moveCarousel, 3000);
});
