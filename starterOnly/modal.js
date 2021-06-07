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
const formData = document.querySelectorAll(".formData");
const formValid = document.getElementById("submit");
const inputValid = document.querySelectorAll("data-error")
let formDataAfter = document.getElementsByClassName(".formData");
let firstName = document.getElementById("first");
let nameValid = /^[A-Za-z]{2,30}/;
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let emailValid = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
let birthdate = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let locationCity = document.getElementsByClassName(".city");
let checkbox1 = document.getElementById("checkbox1");
let nameForm = [firstName, lastName];
const modalClose = document.querySelector(".close")
/*let input = [
{firstName = [
  {
    true : "sfddf",
    miss : "sdfff",
    false : "dfsg"
  }
]
},
{lastName = [
  {
    true : "fdsf",
    miss : "sdfdf",
    false : "sfsdfs"
  }
]
}

]*/
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

function validation(event){ 
  // Validation champ Nom / prénom
  /*for (let element of nameForm){
    if (element.validity.valueMissing){
      event.preventDefault();
      element.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
    }else if (nameValid.test(element.value) == false){
      event.preventDefault();
      element.closest(".formData").setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour ce champ.");
    }else{
      element.closest(".formData").setAttribute("data-error", "Champ correctement rempli.");
      element.closest(".formData").style.color="green";
      //je n'arrive pas à cibler le pseudo élément avec le content = data-error
    }
  }*/
  firstName.addEventListener("input", function(event){
    if (firstName.validity.valueMissing){
      event.preventDefault();
      firstName.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
    }else if (nameValid.test(firstName.value) == false){
      event.preventDefault();
      firstName.closest(".formData").setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour ce champ.");
    }else{
      firstName.closest(".formData").setAttribute("data-error", "Champ correctement rempli.");
      firstName.closest(".formData").content.style.color="green";/*je n'arrive pas à cibler le pseudo élément avec le content = data-error*/
    }
  })

  lastName.addEventListener("input", function(event){
    if (lastName.validity.valueMissing){
      event.preventDefault();
      lastName.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
    }else if (nameValid.test(lastName.value) == false){
      event.preventDefault();
      lastName.closest(".formData").setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour ce champ.");
    }else{
      lastName.closest(".formData").setAttribute("data-error", "Champ correctement rempli.");
      lastName.closest(".formData").style.color="green";/*je n'arrive pas à cibler le pseudo élément avec le content = data-error*/
    }
  })
    // Validation champ Email
  email.addEventListener("input", function(event){
    if (email.validity.valueMissing){
      event.preventDefault();
      email.closest(".formData").setAttribute("data-error", "Veuillez renseigner ce champ ");
    }else if (emailValid.test(email.value) == false){
      event.preventDefault();
      email.closest(".formData").setAttribute("data-error", "Veuillez entrer une adresse email valide");
    }else{
      email.closest(".formData").setAttribute("data-error", "Adresse email valide");
      email.closest(".formData").style.color="green";/*je n'arrive pas à cibler le pseudo élément avec le content = data-error*/
    }
  })
    // Validation champ Date de naissance
  birthdate.addEventListener("input", function(event){
    if (birthdate.validity.valueMissing){
      event.preventDefault();
      birthdate.closest(".formData").setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    }else {
      event.preventDefault();
      birthdate.closest(".formData").setAttribute("data-error", "Date de naissance valide");
      birthdate.closest(".formData").style.color="green";/*je n'arrive pas à cibler le pseudo élément avec le content = data-error*/
    }
  })
    // Validation champ Nombre de tournois
  quantity.addEventListener("input", function(event){
    if (quantity.validity.valueMissing){
      event.preventDefault();
      quantity.closest(".formData").setAttribute("data-error", "Veuillez renseigner ce champ ");
    }else {
      event.preventDefault();
      quantity.closest(".formData").setAttribute("data-error", "ok");
      quantity.closest(".formData").style.color="green";/*je n'arrive pas à cibler le pseudo élément avec le content = data-error*/
    }
  })
    // Validation Conditions d'utilisation
  checkbox1.addEventListener("change", function(event){
    if (this.checked==false){
      checkbox1.closest(".formData").setAttribute("data-error", "Veuillez accepter nos conditions d'utilisation ");
    }else{
        event.preventDefault();
        checkbox1.closest(".formData").setAttribute("data-error", "Conditions d'utilisation acceptées");
    }
  })
  


    // Validation champ Villes
      if (locationCity.validity.value !== checked){
        locationCity.closest(".formData").setAttribute("data-error", "Veuillez renseigner ce champ ");
      }else{
        locationCity.closest(".formData").setAttribute("data-error", "ok");
      }
  
    
  

  
}
