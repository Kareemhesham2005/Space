let menuBtn = document.querySelector("#hamburger");
let menuCloseBtn = document.querySelector("#close");
let nav = document.querySelector("nav");

menuBtn.onclick = function () {
  nav.style.cssText += "width: 70vw;";
};

menuCloseBtn.onclick = function () {
  nav.style.cssText += "width: 0vw;";
};

window.onresize = function () {
  if (window.innerWidth > 700) {
    nav.style.cssText += "right: 0; width: auto;";
  }
};
