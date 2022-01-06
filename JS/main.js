let menuBtn = document.querySelector("#hamburger");
let menuCloseBtn = document.querySelector("#close");
let nav = document.querySelector("nav");
let closeBtn = document.querySelector("nav img");
let menu = document.querySelector("nav ul");
let img = document.querySelector("#tech .content .image img");
let arrayOfPages = ["SPACEPORT", "LAUNCH VEHICLE", "SPACE CAPSULE"];
let heading = document.querySelector("#tech .content .text h1");

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
let src_portrait;
let src_landscape;

if (heading.innerText == arrayOfPages[0]) {
  src_portrait = "../Images/image-spaceport-portrait.jpg";
  src_landscape = "../Images/image-spaceport-landscape.jpg";
} else if (heading.innerText == arrayOfPages[1]) {
  src_portrait = "../Images/image-launch-vehicle-portrait.jpg";
  src_landscape = "../Images/image-launch-vehicle-landscape.jpg";
} else {
  src_portrait = "../Images/image-space-capsule-portrait.jpg";
  src_landscape = "../Images/image-space-capsule-landscape.jpg";
}

if (window.innerWidth <= 1390) {
  img.setAttribute("src", src_landscape);
} else {
  img.setAttribute("src", src_portrait);
}

window.addEventListener("resize", function () {
  if (window.innerWidth <= 1390) {
    img.setAttribute("src", src_landscape);
  } else {
    img.setAttribute("src", src_portrait);
  }
});
