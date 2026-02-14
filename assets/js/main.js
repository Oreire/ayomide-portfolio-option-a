
// Mobile nav toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    burger.setAttribute('aria-expanded', (!open).toString());
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple client-side validation for Option A (no backend)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('name')||{}).value?.trim();
    const email = (document.getElementById('email')||{}).value?.trim();
    const message = (document.getElementById('message')||{}).value?.trim();

    if (!name || !email || !message) {
      alert('Please complete all fields.');
      return;
    }
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Thanks! Your message has been validated locally. In Options B/C we will send or store it.');
    form.reset();
  });
}
