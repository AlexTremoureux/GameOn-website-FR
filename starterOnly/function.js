
import {locationCity} from './variable.js';
import {checkbox1} from './variable.js';
import {elInput} from './variable.js';

// Validation champ Nom / prénom
export function nameInput() {
    //Boucle for de l'array elInput
    for (let element of elInput) {
        //Si pas de valeurs, retourne message d'erreur
        if (element.scope.validity.valueMissing) {
          element.scope.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
        //Sinon si mauvaise valeur saisie, retourne message d'erreur
        }else if (!element.regex.test(element.scope.value)) {
          element.scope.closest(".formData").setAttribute("data-error", element.errorMessage);
        //Sinon efface le message d'erreur et renvoi true
        }else {
          element.scope.closest(".formData").setAttribute("data-error", "");
          return true;
        }
        //listener sur input et rappel de la fonction 
        element.scope.addEventListener("blur", function(event) {
          if (element.scope.validity.valueMissing) {
            element.scope.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
          }else if (!element.regex.test (element.scope.value)) {
            element.scope.closest(".formData").setAttribute("data-error", element.errorMessage);
          }else{
            element.scope.closest(".formData").setAttribute("data-error", "");
          }
        })
      }
    }

// Validation Conditions d'utilisation
export function conditionsOfUse() {
    //Si les condition d'utilisations ne sont pas checked, retourne message d'erreur
    if (!checkbox1.checked) {
      checkbox1.closest(".formData").setAttribute("data-error", "Veuillez accepter nos conditions d'utilisation ");
    //Sinon efface le message d'erreur et renvoi true
    }else{
        checkbox1.closest(".formData").setAttribute("data-error", "");
        return true;
    }
    //listener sur checkbox1 et rappel de la fonction
    checkbox1.addEventListener("change", function(event) {
      if (!this.checked) {
        checkbox1.closest(".formData").setAttribute("data-error", "Veuillez accepter nos conditions d'utilisation ");
      }else{
        checkbox1.closest(".formData").setAttribute("data-error", "");
      }
    })
  }

// Validation champ Villes
export function countCheckbox() {
    //Mise en place d'un filtre sur l'array locationCity qui vient chercher le nombre de checkbox checked
    const countcbx = [...locationCity].filter(({checked}) => checked).length;
    /*console.log(ccbx)
    let compteur = 0;
    for (let i=0; i<locationCity.length; i++) {
      if (locationCity[i].checked == true) {
        compteur ++;
      }
    }*/
    
    for (let elCity of locationCity) {
        //si le compteur de checkbox checked<1, message d'erreur
      if (countcbx<1) {
        elCity.closest(".formData").setAttribute("data-error", "veuillez cocher une ville");
        //Sinon renvoi true
      }else {
        elCity.closest(".formData").setAttribute("data-error", "");
        return true;
      }
      //listener sur elCity et fonction
        // Ne marche pas!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      elCity.addEventListener("blur", function(event){
        if (!compteur) {
          elCity.closest(".formData").setAttribute("data-error", "veuillez cocher une ville");
        }else {
          elCity.closest(".formData").setAttribute("data-error", "");
        }
      })
    }
  }

// Message de validation à l'envoi du formulaire
export function snackbar() {
    // DOM Element
    var x = document.getElementById("snackbar");
    // Ajoute la classe show
    x.className = "show";
    // Après 3 secondes, supprime la classe show
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
    
