//------MENU------//
const menuBtn = document.querySelector(".nav__menu-btn");
const menu = document.querySelector(".nav__menu");
const links = document.querySelectorAll(".nav__menu a");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  menuBtn.firstElementChild.classList.toggle("none");
  menuBtn.lastElementChild.classList.toggle("none");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    menuBtn.firstElementChild.classList.toggle("none");
    menuBtn.lastElementChild.classList.toggle("none");
  });
});
