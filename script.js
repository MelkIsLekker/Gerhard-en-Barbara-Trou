document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  function toggleMenu() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Update ARIA attribute for accessibility
    const expanded = menuToggle.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', expanded);
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Optional: close menu when clicking a link (improves UX on mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
    });
  });
});