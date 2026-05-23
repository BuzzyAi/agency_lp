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


// ── Contact form ─────────────────────────────────────────────
const form      = document.querySelector('.contact-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  await new Promise(r => setTimeout(r, 1200));

  submitBtn.textContent = 'Mensagem enviada';
  submitBtn.style.background = '#10B981';

  setTimeout(() => {
    submitBtn.textContent = 'Enviar';
    submitBtn.style.background = '';
    submitBtn.disabled = false;
    form.reset();
  }, 3500);
});


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
