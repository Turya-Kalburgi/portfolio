// ----- theme toggle -----
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  const root = document.documentElement;
  const dark = root.getAttribute('data-theme') === 'dark';
  if (dark) {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
  } else {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
});

// ----- header border once scrolled -----
const header = document.querySelector('.site-header');
addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 10);
}, { passive: true });

// ----- scroll-triggered reveals -----
const revealed = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('in');
      // drop the stagger delay once revealed so hover effects stay snappy
      el.addEventListener('transitionend', () => { el.style.transitionDelay = ''; }, { once: true });
      revealed.unobserve(el);
    }
  }
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  // gentle stagger for siblings arriving together
  el.style.transitionDelay = `${(i % 4) * 90}ms`;
  revealed.observe(el);
});

// ----- footer year -----
document.getElementById('year').textContent = new Date().getFullYear();
