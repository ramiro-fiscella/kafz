const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-links');

if (hamburger && navLink) {
  hamburger.addEventListener('click', () => {
    navLink.classList.toggle('expanded');
  });
} else {
  console.error('Elementos no encontrados');
}
