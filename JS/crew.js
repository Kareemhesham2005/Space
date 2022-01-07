let lis = document.querySelectorAll("#crew .content ul li");
let crewImage = document.querySelector("#crew .content .image img");
let crewTitle = document.querySelector("#crew .content .text .name");
let crewId = document.querySelector("#crew .content .text .id");
let crewContent = document.querySelector("#crew .content .text p");
let clicked;
let crewData;

fetch("JS/crew.json")
  .then((response) => response.json())
  .then((data) => (crewData = data));

lis.forEach((li) => {
  li.onclick = function () {
    lis.forEach((el) => {
      el.classList.remove("active");
    });
    clicked = this.getAttribute("id");
    content(crewData);
    li.classList.add("active");
  };
});

function content(data) {
  data.forEach((el) => {
    if (el.id == clicked) {
      crewImage.setAttribute("src", el.src);
      crewImage.setAttribute("alt", el.name);
      crewTitle.innerHTML = el.name;
      crewId.innerHTML = el.id;
      crewContent.innerHTML = el.content;
    }
  });
}
