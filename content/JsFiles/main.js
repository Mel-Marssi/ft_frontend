import Router from "./Router.js";
import  *  as Render from "./LoadingPages.js";


Render.Load_LoginPage();

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




