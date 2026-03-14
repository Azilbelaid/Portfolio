/* ─── SCROLL PROGRESS BAR ───────────────────────────────────────────── */
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
});

/* ─── CURSOR GLOW ───────────────────────────────────────────────────── */
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

/* ─── FLOATING PARTICLES (HERO) ─────────────────────────────────────── */
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay = (Math.random() * 8) + 's';
    p.style.width = p.style.height = (1 + Math.random() * 3) + 'px';
    particlesContainer.appendChild(p);
  }
}

/* ─── TYPING EFFECT ──────────────────────────────────────────────────── */
const words = ['Cybersécurité', 'CTF Player', 'Dev Full-Stack', 'Kali Linux', 'Pentester', 'IA & Algo'];
let wIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById('typingText');
function type() {
  if (!el) return;
  const w = words[wIdx];
  el.textContent = deleting ? w.substring(0, cIdx--) : w.substring(0, cIdx++);
  if (!deleting && cIdx === w.length + 1) { deleting = true; setTimeout(type, 1800); return; }
  if (deleting && cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; }
  setTimeout(type, deleting ? 60 : 110);
}
setTimeout(type, 1200);

/* ─── SCROLL REVEAL ──────────────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

/* ─── ANIMATED STAT COUNTERS ─────────────────────────────────────────── */
const counters = document.querySelectorAll('.stat-counter-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 1500;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current);
      }, 16);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

/* ─── SKILL BARS ─────────────────────────────────────────────────────── */
const bars = document.querySelectorAll('.bar-fill');
bars.forEach(b => { b.style.width = '0%'; });
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = e.target.getAttribute('data-width');
      e.target.style.width = target;
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
bars.forEach(b => barObserver.observe(b));

/* ─── SCROLL TO TOP ──────────────────────────────────────────────────── */
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('show', window.scrollY > 400);
});

/* ─── ACTIVE NAV ON SCROLL ───────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

/* ─── NAV SHADOW ON SCROLL ───────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50
    ? '0 4px 30px rgba(0,0,0,0.4)'
    : 'none';
});

/* ─── HAMBURGER MENU ─────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks2 = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks2.classList.toggle('open');
  });
  navLinks2.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks2.classList.remove('open');
    });
  });
}
