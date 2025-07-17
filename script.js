const menu = document.getElementById('menu');
const mobileNav = document.getElementById('mobile-nav');

menu.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});
