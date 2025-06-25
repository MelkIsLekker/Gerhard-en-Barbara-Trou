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



  //
  const countdownEl = document.getElementById("countdown");

  // Replace with your actual wedding date & time
  const weddingDate = new Date("2025-12-20T15:00:00");

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      countdownEl.innerHTML = "Die groot dag het aangebreek!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerHTML = `
      ${days} dae, ${hours} ure, ${minutes} minute, ${seconds} sekondes
    `;
  }

  updateCountdown(); // run once immediately
  setInterval(updateCountdown, 1000); // update every second
});

const circles = document.querySelectorAll('.color-circle');

  // Skep die popup
  const popup = document.createElement('div');
  popup.className = 'color-popup';
  popup.innerHTML = `
    <div class="color-preview"></div>
    <div class="color-name"></div>
    <button class="close-popup">Sluit</button>
  `;
  document.body.appendChild(popup);

  const preview = popup.querySelector('.color-preview');
  const nameEl = popup.querySelector('.color-name');
  const closeBtn = popup.querySelector('.close-popup');

  // Wys popup wanneer 'n sirkel gekliek word
  circles.forEach(circle => {
    circle.addEventListener('click', (e) => {
      e.stopPropagation(); // voorkom dat dit onmiddellik toe maak
      const color = circle.getAttribute('data-color');
      const name = circle.getAttribute('data-name');

      preview.style.background = color;
      nameEl.textContent = `${name} (${color})`;
      popup.style.display = 'block';
    });
  });

  // Sluit popup wanneer 'sluit' knoppie gekliek word
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    popup.style.display = 'none';
  });

  // Sluit popup wanneer enige ander plek gekliek word
  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target)) {
      popup.style.display = 'none';
    }
  });

function toggleMenu(el) {
  const navLinks = document.querySelector('.nav-links');
  el.classList.toggle('active'); // toggle X-burger
  navLinks.classList.toggle('active'); // show/hide nav
}