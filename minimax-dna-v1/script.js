// CuZn - Trade Etching Direct
// Minimax DNA v1 - Codex Origin

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for reveal animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe craft cards and sector items
  document.querySelectorAll('.craft-card, .sector-item').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // Nav background on scroll
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.style.background = 'rgba(15, 13, 11, 0.95)';
    } else {
      nav.style.background = 'linear-gradient(180deg, var(--c-bg) 0%, transparent 100%)';
    }
    
    lastScroll = currentScroll;
  }, { passive: true });

  // Subtle parallax on hero proof card
  const proofCard = document.querySelector('.proof-card');
  
  if (proofCard) {
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 10;
      const yPos = (clientY / window.innerHeight - 0.5) * 10;
      
      proofCard.style.transform = `rotateY(${xPos - 8}deg) rotateX(${yPos + 4}deg)`;
    }, { passive: true });
  }
});
