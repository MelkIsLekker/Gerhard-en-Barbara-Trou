document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  function toggleMenu() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');

    const expanded = menuToggle.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', expanded);
  }

  menuToggle.addEventListener('click', toggleMenu);

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', false);
    });
  });

  const countdownEl = document.getElementById("countdown");
  const weddingDate = new Date("2026-01-05T15:00:00");

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

  updateCountdown();
  setInterval(updateCountdown, 1000);

  const circles = document.querySelectorAll('.color-circle');
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

  circles.forEach(circle => {
    circle.addEventListener('click', (e) => {
      e.stopPropagation();
      const color = circle.getAttribute('data-color');
      const name = circle.getAttribute('data-name');

      preview.style.background = color;
      nameEl.textContent = `${name} (${color})`;
      popup.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    popup.style.display = 'none';
  });

  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target)) {
      popup.style.display = 'none';
    }
  });
});
