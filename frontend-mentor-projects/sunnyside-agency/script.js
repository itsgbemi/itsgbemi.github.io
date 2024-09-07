const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const header = document.querySelector('header');
const navMobile = document.querySelector('.nav-mobile');

// Handle Hamburger Menu Toggle
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');  // Toggle the active class for the cancel icon
  navMobile.classList.toggle('open');    // Show/hide the mobile navigation
  body.classList.toggle('nav-open');     // Prevent body from scrolling when nav is open
});

// Handle Scroll Event to Change Header on Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {  // Adjust this value based on when you want the effect to start
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
