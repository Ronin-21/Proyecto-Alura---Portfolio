//------------MENU---------------//
/*-------VARIABLE--------*/
const $menu = document.querySelector(".nav__menu");
const $menuBtn = document.querySelector(".nav__menu-btn");
const $linksHover = document.getElementById("links-hover");
const $links = document.querySelectorAll(".nav__menu a");

/*-------ABRIR Y CERRAR MENU--------*/
$menuBtn.addEventListener("click", () => {
  $menu.classList.toggle("show-menu");
  $menuBtn.firstElementChild.classList.toggle("hidden");
  $menuBtn.lastElementChild.classList.toggle("hidden");
});

/*------AGREGAR UN EVENTLISTENER A CADA LINK------*/
$links.forEach((link) => {
  /*------EFECTO HOVER AL PASAR POR UN LINK------*/
  link.addEventListener("mouseenter", (e) => {
    $linksHover.innerHTML = e.target.dataset.text;
    $linksHover.style.opacity = 1;
  });
  link.addEventListener("mouseleave", (e) => {
    $linksHover.style.opacity = 0;
  });

  /*------CERRAR MENU AL CLICKEAR UN LINK------*/
  link.addEventListener("click", () => {
    $menu.classList.remove("show-menu");
    $menuBtn.firstElementChild.classList.toggle("hidden");
    $menuBtn.lastElementChild.classList.toggle("hidden");
  });
});
