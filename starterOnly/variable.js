const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
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

const modalClose = document.querySelector(".close");

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