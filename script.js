// ✨ Smooth Scroll Animation
const faders = document.querySelectorAll('.fade');

const appearOnScroll = () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', appearOnScroll);
window.addEventListener('load', appearOnScroll);

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
