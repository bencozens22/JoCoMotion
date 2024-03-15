function scrollToContactForm() {
    // Get the contact form section element
    var contactFormSection = document.getElementById("contact-form-section");

    // Scroll to the contact form section using smooth behavior
    contactFormSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to adjust grid container classes and swap grid items based on screen width
function adjustGridClassesAndSwapItems() {
    const screenWidth = window.innerWidth;
    const gridContainersReverse = document.querySelectorAll('.grid-container-reverse');
  
    gridContainersReverse.forEach(container => {
      const gridItems = container.querySelectorAll('.grid-item');
      if (screenWidth <= 768) {
        container.classList.remove('grid-container-reverse');
        container.classList.add('grid-container');
      } else {
        container.classList.remove('grid-container');
        container.classList.add('grid-container-reverse');
      }
  
      if (gridItems.length === 2 && screenWidth <= 768) {
        const firstItem = gridItems[0];
        const secondItem = gridItems[1];
        container.insertBefore(secondItem, firstItem);
      }
    });
  }
  
  // Event listener for window load
  window.addEventListener('load', adjustGridClassesAndSwapItems);
  
  // Event listener for window resize
  window.addEventListener('resize', adjustGridClassesAndSwapItems);
  
  
  
  