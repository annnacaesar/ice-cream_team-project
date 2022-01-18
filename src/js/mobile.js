(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu-btn__open'),
    closeMenuBtn: document.querySelector('.mobile-menu-close-btn'),
    menu: document.querySelector('.mobile-menu__modal'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();