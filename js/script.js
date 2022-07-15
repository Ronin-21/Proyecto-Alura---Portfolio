//-------EFECTOS--------//
//-------MENU BACKGROUND--------*/
const nav = document.querySelector(".nav");

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;

  if (scroll_position > 200) {
    nav.classList.add("nav-bg");
  } else {
    nav.classList.remove("nav-bg");
  }
});
