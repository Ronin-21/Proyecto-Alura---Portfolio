//------FORMULARIO--------//
const $form = document.getElementById("contact__form");
const $nombre = document.getElementById("contact__form-name");
const $email = document.getElementById("contact__form-email");
const $comentarios = document.getElementById("contact__form-comments");
const $modal = document.getElementById("contact__modal");

/*------VALIDACION-------*/
/* let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$/;
let regexEmail =
  /^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
let aux = true;

$nombre.addEventListener("change", () => {
  if (!regexName.test($nombre.value)) {
    alert("nombre incorrecto");
    aux = false;
  }
});

$email.addEventListener("change", () => {
  if (!regexEmail.test($email.value)) {
    alert("email incorrecto");
    aux = false;
  }
});

function validationForm() {
  if (aux) {
    $form.submit();
  }
} */

/*-------ENVIO-------*/
$form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://formsubmit.co/ajax/ale_lasarte@hotmail.com", {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      $modal.classList.add("show-modal");
      $form.reset();
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error, intenta nuevamente";
      /* $modal.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`; */
      console.log(message);
    })
    .finally(() => {
      setTimeout(() => {
        $modal.classList.remove("show-modal");
      }, 2000);
    });
});
