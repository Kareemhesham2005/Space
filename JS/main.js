let menuBtn = document.querySelector("#hamburger");
let menuCloseBtn = document.querySelector("#close");
let nav = document.querySelector("nav");
let closeBtn = document.querySelector("nav img");
let menu = document.querySelector("nav ul");

menuBtn.onclick = function () {
  nav.style.cssText += "width: 70vw;";
  menu.style.display = "flex";
  closeBtn.style.display = "block";
};

menuCloseBtn.onclick = function () {
  nav.style.cssText += "width: 0vw;";
  menu.style.display = "none";
  closeBtn.style.display = "none";
};

window.onresize = function () {
  if (window.innerWidth > 700) {
    nav.style.cssText += "right: 0; width: auto;";
    menu.style.display = "block";
  } else {
    nav.style.cssText += "right: 0; width: 0;";
    menu.style.display = "none";
    closeBtn.style.display = "none";
  }
};
