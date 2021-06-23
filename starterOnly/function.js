
import { locationCity } from './constants.js';
import { checkbox1 } from './constants.js';
import { elInput } from './constants.js';

// Menu Hamburger function
export const editNav = () => {
  var z = document.getElementById("myTopnav");
  if (z.className === "topnav") {
    z.className += " responsive";
  } else {
    z.className = "topnav";
  }
}

// Validation champ Nom / Prénom / E-mail / Date de naissance / Nombre de tournois
export const inputValid = () => {
  let countValidationInput = 0;
  //Boucle for de l'array elInput
  for (let element of elInput) {
    /* Si il n'y a pas de valeurs rentrées, apparition d'un message d'erreur */
    if (element.scope.validity.valueMissing) {
      element.scope.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
      element.scope.style.borderColor = "red";
      /* Sinon si une mauvaise valeur est saisie, apparition d'un message d'erreur personnalisé */
    } else if (!element.regex.test(element.scope.value)) {
      element.scope.closest(".formData").setAttribute("data-error", element.errorMessage);
      element.scope.style.borderColor = "red";
      /* Sinon effacement du message d'erreur si le champ est saisi correctement*/
    } else {
      element.scope.closest(".formData").setAttribute("data-error", "");
      element.scope.style.borderColor = "black";
      countValidationInput ++;
    }
  }
  /* Si le nombre d'input valide est égal au nombre d'input de l'array elInput, renvoi true, sinon false */
  return (countValidationInput === elInput.length) 
}

// Validation champ Villes
export const countCheckbox = () => {
  /* Mise en place d'un filtre sur l'array locationCity qui vient chercher le nombre de checkboxs cochés, si il est inferieur à 1 message d' erreur */
  if ([...locationCity].filter(({ checked }) => checked).length < 1) {
    locationCity[0].closest(".formData").setAttribute("data-error", "veuillez cocher une ville");
    return false;
  /* Sinon effacement du message d'erreur et renvoi true */
  }
  locationCity[0].closest(".formData").setAttribute("data-error", "");
  return true;
}

// Validation Conditions d'utilisation
export const conditionsOfUse = () => {
  /* Si la case des conditions d'utilisations n' est pas cochée, retourne un message d'erreur */
  if (!checkbox1.checked) {
    checkbox1.closest(".formData").setAttribute("data-error", "Veuillez accepter nos conditions d'utilisation ");
    return false;
    /* Sinon efface le message d'erreur et renvoi true */
  }
  checkbox1.closest(".formData").setAttribute("data-error", "");
  return true;
}

// DOM Element
const x = document.getElementById("snackbar");
/* Message de validation à l'envoi du formulaire
Ajout de la classe show afin d'afficher le message de validation*/
export const snackbar = () => {
  x.className = "show" ;
}