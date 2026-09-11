const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

const resetHorizontalPosition = () => {
  if (window.scrollX !== 0) window.scrollTo({ left: 0, top: window.scrollY, behavior: 'auto' });
};

window.addEventListener('pageshow', resetHorizontalPosition);
window.addEventListener('resize', resetHorizontalPosition);
resetHorizontalPosition();

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu');
      document.body.classList.remove('menu-open');
    });
  });
}

document.querySelectorAll('.faq-list details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.faq-list details').forEach((otherItem) => {
      if (otherItem !== item) otherItem.open = false;
    });
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
