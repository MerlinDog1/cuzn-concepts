const panels = document.querySelectorAll('.panel');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 900, easing: 'cubic-bezier(.21,.98,.23,.99)', fill: 'forwards' }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

panels.forEach((panel) => {
  panel.style.opacity = '0';
  observer.observe(panel);
});
