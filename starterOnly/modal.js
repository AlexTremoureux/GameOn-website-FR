import { modalbg } from './constants.js';
import { modalBtn } from './constants.js';
import { modalClose } from './constants.js';
import { formValid } from './constants.js';
import { editNav } from './function.js';
import { inputValid } from './function.js';
import { conditionsOfUse } from './function.js';
import { countCheckbox } from './function.js';
import { snackbar } from './function.js';

// Open Close function Hamburger
let iconBurger = document.getElementById("burger");

// Open Close Hamburger event
iconBurger.addEventListener("click", editNav);

// launch modal function
const launchModal = () => { modalbg.style.display = "block" };

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal function
const closeModal = () => { modalbg.style.display = "none" };
  
// close modal event
modalClose.addEventListener("click", closeModal);

//Function validation form
const validation = (event) => {
  event.preventDefault();
  // Validation champ Nom / Prénom / Email / Date de naissance / Nombre de tournois
  const inputValidity = inputValid();
  // Validation champ Villes
  const checkboxValidity = countCheckbox();
  // Validation Conditions d'utilisation
  const conditionValidity = conditionsOfUse();
  /* Si toutes les fonctions ont renvoyées true, fonction snackbar qui envoi un message de confirmation d'envoi */
  if ( inputValidity && checkboxValidity && conditionValidity ) {
    snackbar();
    setTimeout(() => {
      closeModal()
    }, 2000);
  } else {
    return false
  }
}

// Validation form event
formValid.addEventListener("click", validation);
