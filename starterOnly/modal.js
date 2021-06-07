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
let formDataAfter = document.getElementsByClassName(".formData");
let firstName = document.getElementById("first");
let nameValid = /^[A-Za-z]{2,30}/;
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let emailValid = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
let birthdate = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let locationEvent = document.getElementsByClassName(".checkbox-input");
let checkbox1 = document.getElementById("checkbox1");
let nameForm = [firstName, lastName];
const modalClose = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Validation formulaire
formValid.addEventListener("click", validation)

function validation(event){
  for (let element of nameForm){
    if (element.validity.valueMissing){
      event.preventDefault();
      element.closest(".formData").setAttribute("data-error", "Veuillez remplir ce champ.");
    }else if (nameValid.test(element.value) == false){
      event.preventDefault();
      element.closest(".formData").setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour ce champ.");
    }else{
      element.closest(".formData").setAttribute("data-error", "Champ correctement rempli.");
      element.closest(".formData").style.color="green";
    }
  }
  if (email.validity.valueMissing){
    event.preventDefault();
    email.closest(".formData").setAttribute("data-error", "Veuillez renseigner ce champ ");
  }else if (emailValid.test(email.value) == false){
    event.preventDefault();
    email.closest(".formData").setAttribute("data-error", "Veuillez une adresse email valide");
  }else{
    email.closest(".formData").setAttribute("data-error", "Adresse email valide");
    email.closest(".formData").style.color="green";
  }
  if (birthdate.validity.valueMissing){
    event.preventDefault();
    birthdate.closest(".formData").setAttribute("data-error", "Vous devez entrer votre date de naissance.");
  }else {
    event.preventDefault();
    birthdate.closest(".formData").setAttribute("data-error", "Date de naissance valide");
    birthdate.closest(".formData").style.color="green";
  }
  if (quantity.validity.valueMissing){
    event.preventDefault();
    quantity.closest(".formData").setAttribute("data-error", "Veuillez renseigner ce champ ");
  }else {
    event.preventDefault();
    quantity.closest(".formData").setAttribute("data-error", "ok");
    quantity.closest(".formData").style.color="green";
  }
  for (let city of locationEvent){
    if (city.validity.value){
      
    }
  }
}
// close modal function
function closeModal() {
  modalbg.style.display = "none";
}

// close modal event
modalClose.addEventListener("click", closeModal);
