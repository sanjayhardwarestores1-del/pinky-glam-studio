// Pinky Makeover Studio — static site interactions

// Navbar scroll
const nav = document.querySelector('.navbar');
const onScroll = () => {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 20);
};
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

// Active nav link based on current page
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('[data-nav]').forEach(a => {
  if (a.getAttribute('data-nav') === path) a.classList.add('active');
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Gallery filter + lightbox
const tabs = document.querySelectorAll('.gallery-tabs button');
const items = document.querySelectorAll('.gallery-item');
tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    items.forEach(it => {
      it.style.display = (cat === 'All' || it.dataset.cat === cat) ? '' : 'none';
    });
  });
});

const lb = document.querySelector('.lightbox');
const lbImg = document.querySelector('.lightbox-inner img');
items.forEach(it => {
  it.addEventListener('click', () => {
    if (!lb || !lbImg) return;
    const img = it.querySelector('img');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.classList.add('open');
  });
});
if (lb) {
  lb.addEventListener('click', () => lb.classList.remove('open'));
}

// Footer year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();
