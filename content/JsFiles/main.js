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
  let signInForm = document.querySelector(".section");
  signInForm.classList.add('section_reverse');
  setTimeout(function() {
    Router.navigateTo("/content/", true);
    signInForm.classList.remove('section_reverse');
  }, 700);
});


// let loginContainer = document.querySelector(".container");
// loginContainer.addEventListener("click", function (event) {
//   console.log(event.target);
//   // if (event.target === loginContainer) {
//     Router.navigateTo("/content/", true);
  
// });

// let signInForm = document.querySelector(".sign_form")
// console.log(signInForm.hidden)
// if (signInForm.hidden == false) {
//   let blur_background = document.querySelector(".my-container");
//   blur_background.addEventListener("click", function () {
//   Router.navigateTo("/content/", true);
//   alert("You have to sign in first")
// });
// }
// let blurEffect = document.querySelector(".my-container");
// blurEffect.style.filter = "blur(10px)";
// let signInForm = document.querySelector(".sign-in");
// signInForm.hidden = !signInForm.hidden;