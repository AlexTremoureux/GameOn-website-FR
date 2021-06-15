// DOM Elements
export const modalbg = document.querySelector(".bground");
export const modalBtn = document.querySelectorAll(".modal-btn");
export const modalClose = document.querySelector(".close");
export const formData = document.querySelectorAll(".formData");
export const formValid = document.getElementById("submit");
export const inputValid = document.querySelectorAll("data-error");
export const formDataAfter = document.getElementsByClassName(".formData");
export const firstName = document.getElementById("first");
export const checkbox1 = document.getElementById("checkbox1");
export const lastName = document.getElementById("last");
export const email = document.getElementById("email");
export const birthdate = document.getElementById("birthdate");
export const quantity = document.getElementById("quantity");
export const locationCity = document.getElementsByName("location");

//RegExp
export const nameValid = /^[A-Za-z]{2,30}/;
export const emailValid = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
export const quantityValid = /^[0-9]$|^[1-9][0-9]$|^$/;
export const birthdateValid = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;

//Array
export const elInput = [
  {
    scope : firstName,
    regex : nameValid,
    errorMessage : "Veuillez rentrer votre prénom, deux caractères minimum."
  },
  {
    scope : lastName,
    regex : nameValid,
    errorMessage : "Veuillez rentrer votre nom de famille, deux caractères minimum."
  },
  {
    scope : email,
    regex : emailValid,
    errorMessage : "Veuillez entrer une adresse email valide."
  },
  {
    scope : birthdate,
    regex : birthdateValid,
    errorMessage : "Veuillez rentrer une date au format DD/MM/YYYY"
  },
  {
    scope : quantity,
    regex : quantityValid,
    errorMessage : "Veuillez entrer un nombre compris entre 0 et 99."
  }
]