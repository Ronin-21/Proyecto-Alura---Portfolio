//------------MENU---------------//
/*-------VARIABLE--------*/
const $menu = document.querySelector(".nav__menu");
const $menuBtn = document.querySelector(".nav__menu-btn");
const $links = document.querySelectorAll(".nav__menu a");

/*-------ABRIR Y CERRAR MENU--------*/
$menuBtn.addEventListener("click", () => {
  $menu.classList.toggle("show-menu");
  $menuBtn.firstElementChild.classList.toggle("hidden");
  $menuBtn.lastElementChild.classList.toggle("hidden");
});

/*------CERRAR MENU AL CLICKEAR UN LINK------*/
$links.forEach((link) => {
  link.addEventListener("click", () => {
    $menu.classList.remove("show-menu");
    $menuBtn.firstElementChild.classList.toggle("hidden");
    $menuBtn.lastElementChild.classList.toggle("hidden");
  });
});
