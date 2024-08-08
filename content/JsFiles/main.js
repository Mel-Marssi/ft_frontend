import Router from "./Router.js";

console.log(event);

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
// let blurEffect = document.querySelector(".my-container");
// blurEffect.style.filter = "blur(10px)";
// let signInForm = document.querySelector(".sign-in");
// signInForm.hidden = !signInForm.hidden;