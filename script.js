/* Typing effect */
const words = ['Cybersécurité', 'CTF Player', 'Dev Full-Stack', 'Kali Linux', 'Pentester'];
let wIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById('typingText');
function type() {
  const w = words[wIdx];
  el.textContent = deleting ? w.substring(0, cIdx--) : w.substring(0, cIdx++);
  if (!deleting && cIdx === w.length + 1) { deleting = true; setTimeout(type, 1800); return; }
  if (deleting && cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; }
  setTimeout(type, deleting ? 60 : 110);
}
setTimeout(type, 1200);

/* Scroll reveal */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

/* Skill bars animation */
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

/* Scroll to top button */
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('show', window.scrollY > 400);
});

/* Active nav on scroll */
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

/* Nav background on scroll */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 50
    ? '0 4px 30px rgba(0,0,0,0.4)'
    : 'none';
});
