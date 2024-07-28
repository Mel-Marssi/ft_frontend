document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("sign-in").addEventListener("click", function () {
    let tmp0 = document.getElementsByClassName("button-box")[0]; // Select the first element with class "button-box"
    tmp0.innerHTML = `
      <button class="button-box" id="button1">Button 1</button>
    `;
  });
});