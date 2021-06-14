function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const formValid = document.getElementById("submit");
const inputValid = document.querySelectorAll("data-error");
let formDataAfter = document.getElementsByClassName(".formData");
let firstName = document.getElementById("first");
let nameValid = /^[A-Za-z]{2,30}/;
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let emailValid = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
let birthdate = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let locationCity = document.getElementsByName("location");
let checkbox1 = document.getElementById("checkbox1");

const elInput = [
  {
    scope : firstName,
    regex : new RegExp("^[A-Za-z]{2,30}"),
    errorMessage : "Veuillez rentrer votre prénom, deux caractères minimum."
  },
  {
    scope : lastName,
    regex : new RegExp("^[A-Za-z]{2,30}"),
    errorMessage : "Veuillez rentrer votre nom de famille, deux caractères minimum."
  },
  {
    scope : email,
    regex : new RegExp("^[a-zA-Z0-9\-_]+[a-zA-Z0-9\.\-_]*@[a-zA-Z0-9\-_]+\.[a-zA-Z\.\-_]{1,}[a-zA-Z\-_]+"),
    errorMessage : "Veuillez entrer une adresse email valide."
  },
  {
    scope : birthdate,
    regex : new RegExp("^[0-9]"),
    errorMessage : "Age minimum requis: 12ans"
  },
  {
    scope : quantity,
    regex : new RegExp("^[0-9]"),
    errorMessage : "Veuillez entrer un nombre."
  }
]
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
formValid.addEventListener("click", validation)

//Fonction validation
function validation(event){ 

  //event.preventDefault();


  // Validation champ Nom / prénom
  function nameInput() {
    for (let element of elInput) {
      event.preventDefault();
      if (element.scope.validity.valueMissing) {
        element.scope.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
      }else if (!element.regex.test (element.scope.value)) {
        element.scope.closest(".formData").setAttribute("data-error", element.errorMessage);
      }else {
        element.scope.closest(".formData").setAttribute("data-error", "");
        //return true
      }
      //listener sur input et rappel de la fonction 
      element.scope.addEventListener("blur", function(event) {
        event.preventDefault();
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

  nameInput();
  

  // Validation Conditions d'utilisation
  function conditionsOfUse() {
    if (checkbox1.checked==false) {
      checkbox1.closest(".formData").setAttribute("data-error", "Veuillez accepter nos conditions d'utilisation ");
    }else{
        event.preventDefault();
        checkbox1.closest(".formData").setAttribute("data-error", "");
        //return true
    }
    //listener sur checkbox1 et rappel de la fonction
    checkbox1.addEventListener("change", function(event) {
      if (this.checked==false) {
        checkbox1.closest(".formData").setAttribute("data-error", "Veuillez accepter nos conditions d'utilisation ");
      }else{
        event.preventDefault();
        checkbox1.closest(".formData").setAttribute("data-error", "");
      }
    })
  }
  
  conditionsOfUse();
  

  // Validation champ Villes
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
        //return true
      }
      //listener sur elCity et fonction
      elCity.addEventListener("blur", function(event){
        if (compteur<1) {
          elCity.closest(".formData").setAttribute("data-error", "veuillez cocher une ville")
        }else {
          elCity.closest(".formData").setAttribute("data-error", "")
        }
      })
    }
  }

  countCheckbox();
  
  /*if (nameInput && conditionsOfUse && countCheckbox == !true){
    alert("formulaire envoyé avec succès")
  }*/
}
