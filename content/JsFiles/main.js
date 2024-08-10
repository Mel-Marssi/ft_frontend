import Router from "./Router.js";



document.addEventListener("DOMContentLoaded", function () {
  Router.init();
    });

let google = document.querySelector(".LogoGoogle")

google.addEventListener("click", function () {
  console.log("google")
  // Hamza Authentication <-------------
});

let _42 = document.querySelector(".Logo42")
_42.addEventListener("click", function () {
  console.log("42")
  // 42 Authentication <-------------
});

let exit_button = document.querySelector(".exit")
exit_button.addEventListener("click", function () {
  Router.navigateTo("/content/", true);
  let blurEffect0 = document.querySelector(".my-container");
  blurEffect0.style.filter = "blur(0px)";
  let signInForm0 = document.querySelector(".sign_form");
  signInForm0.hidden = true;
});
// let blurEffect = document.querySelector(".my-container");
// blurEffect.style.filter = "blur(10px)";
// let signInForm = document.querySelector(".sign-in");
// signInForm.hidden = !signInForm.hidden;