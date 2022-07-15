//------------SLIDER & MODAL-------------//
/*-------VARIABLES-------*/
const $nextBtn = document.getElementById("modal__next");
const $prevBtn = document.getElementById("modal__prev");
const $closeBtn = document.getElementById("modal__close");
const $portfolioModal = document.getElementById("portfolio__modal-container");

const $portfolioCards = document.querySelectorAll(".portfolio__card");
const $portfolioModalImg = document.getElementById("portfolio__modal-img");

let carrousel = [];
let cont = 0;

/*---------SHOW MODAL----------*/
/* document.addEventListener("click", (e) => {
  if (e.target.matches(".portfolio .overlay")) {
    e.stopPropagation();
    let card = e.target.parentElement;
    return showModal(card);
  }
}); */

$portfolioCards.forEach((card) => {
  card.addEventListener("click", showModal);
});

/*--------FUNCIONES--------*/

function showModal() {
  carrousel = this.querySelectorAll("img");
  cont = 0;

  $portfolioModal.classList.add("show-modal");
  $portfolioModalImg.src = carrousel[0].src;

  slider();
}

function slider() {
  $prevBtn.addEventListener("click", () => {
    slideCarrouselPrev();
  });

  $nextBtn.addEventListener("click", () => {
    slideCarrouselNext();
  });

  $closeBtn.addEventListener("click", () => {
    $portfolioModal.classList.remove("show-modal");
  });
}

function slideCarrouselNext() {
  if ($portfolioModalImg.src == carrousel[cont].src) {
    cont++;
    if (cont == carrousel.length) {
      cont = 0;
    }
  }
  console.log(cont);
  $portfolioModalImg.src = carrousel[cont].src;
}

function slideCarrouselPrev() {
  if ($portfolioModalImg.src == carrousel[cont].src) {
    cont--;
    if (cont < 0) {
      cont = carrousel.length - 1;
    }
  }
  console.log(cont);
  $portfolioModalImg.src = carrousel[cont].src;
}
