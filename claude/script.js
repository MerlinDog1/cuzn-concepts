(function () {
  'use strict';

  // ===== Scroll Reveal =====
  const revealElements = document.querySelectorAll('[data-reveal]');
  let revealIndex = 0;

  function revealOnScroll() {
    const viewportHeight = window.innerHeight;
    revealElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight * 0.88) {
        el.classList.add('revealed');
      }
    });
  }

  // Initial check + scroll listener
  window.addEventListener('scroll', revealOnScroll, { passive: true });
  window.addEventListener('load', revealOnScroll);

  // ===== Nav scroll state =====
  const nav = document.querySelector('.nav');

  function updateNav() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });

  // ===== Smooth scroll for nav links =====
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ===== Parallax-style subtle motion on hero =====
  var heroTitle = document.querySelector('.hero-title');
  var heroSub = document.querySelector('.hero-sub');

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      var offset = scrollY * 0.15;
      var opacity = 1 - scrollY / (window.innerHeight * 0.8);
      if (heroTitle) {
        heroTitle.style.transform = 'translateY(' + offset + 'px)';
        heroTitle.style.opacity = Math.max(opacity, 0);
      }
      if (heroSub) {
        heroSub.style.transform = 'translateY(' + (offset * 0.6) + 'px)';
        heroSub.style.opacity = Math.max(opacity, 0);
      }
    }
  }, { passive: true });

  // ===== Form handling =====
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.btn');
      var originalHTML = btn.innerHTML;
      btn.innerHTML = 'Sent <span class="btn-arrow">&#10003;</span>';
      btn.style.background = 'var(--brass-dark)';
      setTimeout(function () {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        form.reset();
      }, 2500);
    });
  }
})();