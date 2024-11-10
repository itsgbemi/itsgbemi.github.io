const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuToggle.addEventListener('click', () => {
            const expanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuToggle.setAttribute('aria-expanded', !expanded);
            mobileMenu.setAttribute('aria-hidden', expanded);
        });
  
  
  // Superpower section expand/collapse functionality
  const expandIcons = document.querySelectorAll('.expand-icon');
  const contentSections = document.querySelectorAll('.content-section');

  expandIcons.forEach((icon, index) => {
    icon.classList.add('expanded');
    contentSections[index].classList.remove('hide');

    icon.addEventListener('click', () => {
      if (contentSections[index].classList.contains('hide')) {
        contentSections[index].classList.remove('hide');
        icon.classList.add('expanded');
      } else {
        contentSections[index].classList.add('hide');
        icon.classList.remove('expanded');
      }
    });
  });
