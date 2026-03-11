const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.18,
  rootMargin: '0px 0px -8% 0px'
});

document.querySelectorAll('[data-reveal]').forEach((element, index) => {
  element.style.transitionDelay = `${index * 90}ms`;
  revealObserver.observe(element);
});
