import { modalbg } from './variable.js';
import { modalBtn } from './variable.js';
import { modalClose } from './variable.js';
import { formValid } from './variable.js';
import { editNav } from './function.js';
import { nameInput } from './function.js';
import { conditionsOfUse } from './function.js';
import { countCheckbox } from './function.js';
import { snackbar } from './function.js';



// Open Close function Hamburger
let iconBurger = document.getElementById("burger");
iconBurger.addEventListener("click", editNav);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal function
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
modalClose.addEventListener("click", closeModal);

// Validation formulaire
formValid.addEventListener("click", validation);


//Fonction validation
function validation(event) {
  event.preventDefault();
  // Validation champ Nom / Prénom / Email / Birthdate / Nombre de tournois
  nameInput();

  // Validation Conditions d'utilisation
  conditionsOfUse();

  // Validation champ Villes
  countCheckbox();

  // Si toutes les fonctions ont renvoyées true, fonction snackbar qui envoi un message de confirmation d'envoi
  if (nameInput() && conditionsOfUse() && countCheckbox() == true) {
    setTimeout(function () { closeModal(); }, 2000);
    snackbar();
  } else {
  }
}
