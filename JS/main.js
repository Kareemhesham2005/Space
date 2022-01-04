let menuBtn = document.querySelector("#hamburger");
let menuCloseBtn = document.querySelector("#close");
let nav = document.querySelector("nav");

menuBtn.onclick = function () {
  nav.style.cssText += "right: 28px";
};

menuCloseBtn.onclick = function () {
  nav.style.cssText += "right: -100%";
};

window.onresize = function () {
  if (window.innerWidth > 700) {
    nav.style.cssText += "right: 0";
  }
};
