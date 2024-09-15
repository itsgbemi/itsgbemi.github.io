const menuIcon = document.getElementById('menuIcon');
const mobileNav = document.getElementById('mobileNav');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
  mobileNav.style.right = '0';
  overlay.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  mobileNav.style.right = '-100%';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  mobileNav.style.right = '-100%';
  overlay.style.display = 'none';
});

document.querySelectorAll('.dropdown').forEach(item => {
  item.addEventListener('click', function () {
    const dropdownContent = this.querySelector('.dropdown-content');
    const dropdownIcon = this.querySelector('.dropdown-icon');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    dropdownIcon.style.transform = dropdownContent.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});
