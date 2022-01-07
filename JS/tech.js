let lis = document.querySelectorAll("#tech .content ul li");
let techImage = document.querySelector("#tech .content .image img");
let techTitle = document.querySelector("#tech .content .text .name");
let techContent = document.querySelector("#tech .content .text p");
let clicked;
let techData;

fetch("JS/tech.json")
  .then((response) => response.json())
  .then((data) => (techData = data));

lis.forEach((li) => {
  li.onclick = function () {
    lis.forEach((el) => {
      el.classList.remove("active");
    });
    clicked = this.getAttribute("id");
    content(techData);
    li.classList.add("active");
  };
});

function content(data) {
  data.forEach((el) => {
    if (el.name == clicked) {
      techImage.setAttribute("src", el.src);
      techImage.setAttribute("alt", el.name);
      techTitle.innerHTML = el.name;
      techContent.innerHTML = el.content;
    }
  });
}
