//------------SLIDER & MODAL-------------//
/*-------VARIABLES-------*/
const $nextBtn = document.getElementById("modal__next"),
  $prevBtn = document.getElementById("modal__prev"),
  $closeBtn = document.getElementById("modal__close"),
  $portfolioModal = document.getElementById("portfolio__modal-container"),
  $portfolioModalImg = document.getElementById("portfolio__modal-img"),
  $portfolioCards = document.querySelectorAll(".portfolio__card");

let carrousel = [];
let cont = 0;

/*---------SHOW MODAL----------*/
$portfolioCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {
      return showModal(card);
    }
  });
});

/*--------FUNCIONES--------*/

function showModal(card) {
  carrousel = card.querySelectorAll("img");
  cont = 0;

  $portfolioModal.classList.add("show-modal");
  $portfolioModalImg.src = carrousel[0].src;
}

slider();

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
  $portfolioModalImg.src = carrousel[cont].src;
}

function slideCarrouselPrev() {
  if ($portfolioModalImg.src == carrousel[cont].src) {
    cont--;
    if (cont < 0) {
      cont = carrousel.length - 1;
    }
  }
  $portfolioModalImg.src = carrousel[cont].src;
}
