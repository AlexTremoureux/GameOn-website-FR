
function nameInput() {
    for (let element of elInput){
        if (element.scope.validity.valueMissing) {
            element.scope.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
        }else if (!element.regex.test (element.scope.value)) {
            element.scope.closest(".formData").setAttribute("data-error", element.errorMessage);
        }else {
            element.scope.closest(".formData").setAttribute("data-error", "");
      }
    }
  }

function conditionsOfUse() {
    if (checkbox1.checked==false) {
        checkbox1.closest(".formData").setAttribute("data-error", "Veuillez accepter nos conditions d'utilisation ");
    }else{
        checkbox1.closest(".formData").setAttribute("data-error", "");
    }
  }

function countCheckbox() {
    let compteur = 0;
    for (let i=0; i<locationCity.length; i++) {
        if (locationCity[i].checked == true) {
            compteur ++;
        }
    }
    console.log(compteur)
    for (let elCity of locationCity) {
        if (compteur<1) {
            elCity.closest(".formData").setAttribute("data-error", "veuillez cocher une ville")
        }else {
            elCity.closest(".formData").setAttribute("data-error", "")
        }
    }
  }
  export {nameInput}