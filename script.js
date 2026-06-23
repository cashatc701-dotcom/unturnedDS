const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 35, 140)}ms`;
    observer.observe(item);
  });
} else {
  reveals.forEach((item) => item.classList.add('visible'));
}

const toast = document.getElementById('downloadToast');
document.querySelectorAll('a[href*="/releases/"]').forEach((link) => {
  link.addEventListener('click', () => {
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2800);
  });
});
