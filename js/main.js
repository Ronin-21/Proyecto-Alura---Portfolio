//-------EFECTOS--------//

//-------TO TOP BTN--------//
const $toTop = document.getElementById("btn-toTop");

document.addEventListener("scroll", showBtnToTop);

function showBtnToTop() {
  if (window.scrollY >= 800) {
    $toTop.classList.add("show-btn");
    scrollTop();
  } else {
    $toTop.classList.remove("show-btn");
  }
}

function scrollTop() {
  $toTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

//-------TYPING EFFECT------//
const $text = document.querySelector(".hero__pre-title");
let str = $text.innerHTML;
let i = 0;

$text.innerHTML = "";

function typing() {
  if (i < str.length) {
    $text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typing, 250);
  } else {
    setTimeout(() => {
      $text.innerHTML = "";
      i = 0;
      setTimeout(typing, 250);
    }, 2000);
  }
}

setTimeout(typing, 1500);
