(() => {
  const revealEls = document.querySelectorAll('[data-reveal]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 65, 360)}ms`;
    revealObserver.observe(el);
  });

  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const heroTitle = document.querySelector('.hero-title');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && heroTitle) {
    window.addEventListener('scroll', () => {
      const offset = Math.min(window.scrollY * 0.12, 48);
      heroTitle.style.transform = `translateY(${offset}px)`;
      heroTitle.style.opacity = `${Math.max(1 - window.scrollY / 700, 0.6)}`;
    }, { passive: true });
  }
})();
