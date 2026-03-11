const revealNodes = [...document.querySelectorAll('[data-reveal]')];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealNodes.forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 90, 420)}ms`;
  observer.observe(node);
});
