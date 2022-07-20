//-------EFECTOS--------//
/*-------START ANIMATION--------*/
const $nav = document.querySelector(".nav");
const $hero = document.querySelector(".hero");

const fadeDown = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-down");
    }
  });
});

fadeDown.observe($nav);
fadeDown.observe($hero);

//-------ONSCROLL ANIMATION--------//
/*-------SECTION TITLES--------*/
const $sectionTitle = document.querySelectorAll("section .title");

const zoomIn = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("zoom-in");
      }
    });
  },
  { threshold: 0.5 }
);

$sectionTitle.forEach((element) => {
  zoomIn.observe(element);
});

/*-------PORTFOLIO--------*/
const $portfolioCardInfo = document.querySelectorAll(".show-lateral_info");

const zoomOut = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("zoom-out");
      }
    });
  },
  { threshold: 0.5 }
);

const slideOff = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("slide-left");
        entry.target.classList.remove("slide-right");
      }
    });
  },
  { threshold: 0 }
);

$portfolioCards.forEach((element) => {
  slideOff.observe(element);
});

$portfolioCardInfo.forEach((element) => {
  zoomOut.observe(element);
});

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
