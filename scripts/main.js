// ── Hero particle system ─────────────────────────────────────
(function () {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  const PARTICLE_COUNT = 55;
  const HONEY = 'rgba(245,184,0,';

  function resize() {
    const hero = document.getElementById('hero');
    W = canvas.width  = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function createParticle() {
    return {
      x: rand(0, W),
      y: rand(0, H),
      r: rand(0.8, 2.2),
      vx: rand(-0.15, 0.15),
      vy: rand(-0.25, -0.05),
      alpha: rand(0.1, 0.45),
      da: rand(0.002, 0.006) * (Math.random() < 0.5 ? 1 : -1),
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      p.x  += p.vx;
      p.y  += p.vy;
      p.alpha += p.da;
      if (p.alpha <= 0.05 || p.alpha >= 0.5) p.da *= -1;
      if (p.y < -4) { p.y = H + 4; p.x = rand(0, W); }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = HONEY + p.alpha.toFixed(2) + ')';
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => { resize(); });
  init();
  tick();
})();


// ── Nav scroll behavior ──────────────────────────────────────
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();


// ── Scroll reveal ────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


// ── FAQ accordion ────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.contains('open');

    // close all
    document.querySelectorAll('.faq-item.open').forEach(open => {
      open.classList.remove('open');
      open.querySelector('.faq-answer').style.maxHeight = '0';
      open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // open clicked (if it was closed)
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});


// ── Testimonial carousel ─────────────────────────────────────
const slides = document.querySelectorAll('.testimonial-slide');
const dots   = document.querySelectorAll('.testimonial-dot');
let current  = 0;
let autoplay;

function goTo(idx) {
  slides[current].classList.remove('active');
  dots[current].classList.remove('active');
  dots[current].setAttribute('aria-selected', 'false');
  current = idx;
  slides[current].classList.add('active');
  dots[current].classList.add('active');
  dots[current].setAttribute('aria-selected', 'true');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(autoplay);
    goTo(i);
    startAutoplay();
  });
});

function startAutoplay() {
  autoplay = setInterval(() => goTo((current + 1) % slides.length), 5000);
}
startAutoplay();


// ── Smooth anchor scroll with nav offset ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
