import Router from "./Router.js";
import * as Render from "./LoadingPages.js";

  Router.init();


Router.navigateTo("/LoginPage", true);
// Render.Load_ForgetPassword();
// console.log("main.js");

let google = document.querySelector(".LogoGoogle");

google.addEventListener("click", function () {
  console.log("google");
  // Hamza Authentication <-------------
});

let _42 = document.querySelector(".Logo42");
_42.addEventListener("click", function () {
  console.log("42");
  // 42 Authentication <-------------
});
