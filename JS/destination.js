let lis = document.querySelectorAll("#destination .content ul li");
let destImage = document.querySelector("#destination .content .image img");
let destTitle = document.querySelector("#destination .content .text .first");
let destContent = document.querySelector("#destination .content .text .second");
let avg = document.querySelector("#destination .content .text .avg");
let est = document.querySelector("#destination .content .text .est");
let clicked;
let destData;

fetch("JS/destination.json")
  .then((response) => response.json())
  .then((data) => (destData = data));

lis.forEach((li) => {
  li.onclick = function () {
    lis.forEach((el) => {
      el.classList.remove("active");
    });
    clicked = this.innerText;
    content(destData);
    li.classList.add("active");
  };
});

function content(data) {
  data.forEach((el) => {
    if (el.title == clicked) {
      destImage.setAttribute("src", el.src);
      destImage.setAttribute("alt", el.title);
      destTitle.innerHTML = el.title;
      destContent.innerHTML = el.content;
      avg.innerHTML = el.stat.avg;
      est.innerHTML = el.stat.est;
    }
  });
}
