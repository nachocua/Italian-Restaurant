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

/*function setMinWidthP_OnResponse() {
   let minsize = window
      .getComputedStyle(document.getElementById("p1-onFeature"))
      .getPropertyValue("min-width");
   let size2 = window
      .getComputedStyle(document.getElementById("p2-onFeature"))
      .getPropertyValue("min-width");
   let size3 = window
      .getComputedStyle(document.getElementById("p3-onFeature"))
      .getPropertyValue("min-width");
   if (minsize > size2) {
      minsize = size2;
   }
   if (minsize > size3) {
      minsize = size3;
   }
   document.getElementById("p1-onFeature").style.minWidth = minsize;
   document.getElementById("p2-onFeature").style.minWidth = minsize;
   document.getElementById("p3-onFeature").style.minWidth = minsize;
}

function setMinWidthH4_OnResponse() {
   let minsize = getComputedStyle(
      document.getElementById("h4_1-onFeature")
   ).getPropertyValue("min-width");
   let size2 = getComputedStyle(
      document.getElementById("h4_2-onFeature")
   ).getPropertyValue("min-width");
   let size3 = getComputedStyle(
      document.getElementById("h4_3-onFeature")
   ).getPropertyValue("min-width");
   if (minsize > size2) {
      minsize = size2;
   }
   if (minsize > size3) {
      minsize = size3;
   }
   document.getElementById("h4_1-onFeature").style.minWidth = minsize;
   document.getElementById("h4_2-onFeature").style.minWidth = minsize;
   document.getElementById("h4_3-onFeature").style.minWidth = minsize;
}
*/

/*function setMinWidthH4_OnResponse() {
   var minsize = document.querySelector("#h4_1-onFeature");
   var auxsize = document.querySelector("#h4_2-onFeature");
   if (minsize.computedStyleMap("width") > auxsizecomputedStyleMap("width")) {
      minsize = auxsize;
   }
   var auxsize = document.querySelector("#h4_3-onFeature");
   if (minsize.computedStyleMap("width") > auxsizecomputedStyleMap("width")) {
      minsize = auxsize;
   }
}
window.onresize = setMinWidthH4_OnResponse;
*/