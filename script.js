// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const mainNav   = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Close nav when a link is clicked (mobile)
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// ===== STICKY HEADER SHADOW =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
  } else {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
  }
});

// ===== CONTACT FORM =====
// NOTE: This currently just shows a thank-you alert.
// To make it actually send emails, you'll want to connect it to
// a service like Formspree (free) — see the README for instructions.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    btn.style.background = '#4CAF50';
    this.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.background = '';
    }, 4000);
  });
}

// ===== SCROLL ANIMATION =====
// Fade in elements as they scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .product-item, .why-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  // Trigger visible class via IntersectionObserver defined above
});

// Listen for the class to be added and apply styles
const styleObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === 'class') {
      const el = mutation.target;
      if (el.classList.contains('visible')) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    }
  });
});

document.querySelectorAll('.card, .product-item, .why-item').forEach(el => {
  styleObserver.observe(el, { attributes: true });
});
