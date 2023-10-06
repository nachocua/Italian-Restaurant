window.addEventListener("DOMContentLoaded", () => {
   const reservaBtn = document.getElementById("reservaBtn");
   function handleClick() {
      console.log("Has reservado");
   }
   reservaBtn.addEventListener("click", handleClick);
});

document.querySelector(".actions").addEventListener("click", animateBars);

var line1_bar = document.querySelector(".burger-menu-line1");
var line2_bar = document.querySelector(".burger-menu-line2");
var line3_bar = document.querySelector(".burger-menu-line3");

function animateBars() {
   line1_bar.classList.toggle("active-burger-menu-line1");
   line2_bar.classList.toggle("active-burger-menu-line2");
   line3_bar.classList.toggle("active-burger-menu-line3");
}
