(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open-button"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".mob-menu"),
    navLink: document.querySelectorAll(".nav-link"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  refs.navLink.forEach((link) => link.addEventListener("click", toggleMenu));

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");

    refs.openMenuBtn.classList.toggle("is-hidden");
    refs.closeMenuBtn.classList.toggle("is-hidden");
  }
})();
