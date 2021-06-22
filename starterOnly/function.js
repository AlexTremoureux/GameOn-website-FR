
import { locationCity } from './variable.js';
import { checkbox1 } from './variable.js';
import { elInput } from './variable.js';
// Menu Hamburger function
export function editNav() {
  var z = document.getElementById("myTopnav");
  if (z.className === "topnav") {
    z.className += " responsive";
  } else {
    z.className = "topnav";
  }
}

// Validation champ Nom / prénom
export function inputValid() {
  let countValidationInput = 0;
  //Boucle for de l'array elInput
  for (let element of elInput) {
    //Si pas de valeurs, retourne message d'erreur
    if (element.scope.validity.valueMissing) {
      element.scope.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
      element.scope.style.borderColor = "red";
      //Sinon si mauvaise valeur saisie, retourne message d'erreur
    } else if (!element.regex.test(element.scope.value)) {
      element.scope.closest(".formData").setAttribute("data-error", element.errorMessage);
      element.scope.style.borderColor = "red";
      //Sinon efface le message d'erreur
    } else {
      element.scope.closest(".formData").setAttribute("data-error", "");
      element.scope.style.borderColor = "black";
      countValidationInput ++;
    }
  }
  // Si le nombre d'input valide = le nombre d'input de l'array, renvoi true
  if (countValidationInput === elInput.length) {
    return true
  }
}

// Validation champ Villes
export function countCheckbox() {
 // Boucle permettant l'execution de setAttribute sur la nodeList locationCity
  for (let elCity of locationCity) {
     //Mise en place d'un filtre sur l'array locationCity qui vient chercher le nombre de checkbox checked, si le compteur de checkbox checked<1 = erreur
    if ([...locationCity].filter(({ checked }) => checked).length < 1) {
      elCity.closest(".formData").setAttribute("data-error", "veuillez cocher une ville");
      //Sinon renvoi true
    } else {
      elCity.closest(".formData").setAttribute("data-error", "");
      return true;
    }
  }
}

// Validation Conditions d'utilisation
export function conditionsOfUse() {
  //Si les condition d'utilisations ne sont pas checked, retourne message d'erreur
  if (!checkbox1.checked) {
    checkbox1.closest(".formData").setAttribute("data-error", "Veuillez accepter nos conditions d'utilisation ");
    //Sinon efface le message d'erreur et renvoi true
  } else {
    checkbox1.closest(".formData").setAttribute("data-error", "");
    return true;
  }
}

// Message de validation à l'envoi du formulaire
export function snackbar() {
  // DOM Element
  var x = document.getElementById("snackbar");
  // Ajoute la classe show pour afficher le message de validation
  x.className = "show";
  // Après 2 secondes, supprime la classe show
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
}

