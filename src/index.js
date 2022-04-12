import "./less/index.less";

// Your code goes here!
// 1  - Load
const header = document.querySelector("h1");
header.textContent = "Pay to win Bus";

// 2 - copy ( deletes text upon copy)
window.addEventListener("copy", () => {
  navigator.clipboard.readText().then((text) => {
    header.textContent -= text;
  });
});

// 3 -  double click
document.body.addEventListener("dblclick", (evt) => {
  evt.target.outerHTML = "You done messed up";
});

// 4 - click counter for Fun in the Sun 
const button = document.querySelector(".btn");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});

// 5 - mouse over nav Home href
let test = document.querySelector(".nav-link");

test.addEventListener(
  "mouseenter",
  function (event) {
    event.target.style.color = "red";
    setTimeout(function () {
      event.target.style.color = "black";
    }, 500);
  },
  false
);

// 6 - mousemove
document.body.addEventListener("mousemove", (evt) => {
    const { clientX, clientY } = evt; 
});


// 7 - mouseenter
// 8 - mouseleave
const destinations = document.querySelectorAll(".destination");
for (let destination of destinations) {
  destination.addEventListener("mouseenter", (evt) => {
    destination.style.fontWeight = "bold";
  });

  destination.addEventListener("mouseleave", () => {
    destination.style.fontWeight = "initial";
  });
}
const mainImg = document.querySelector("img");
//drag

mainImg.addEventListener("drag", (event) => {
  document.body.style.backgroundColor = "red";
});

//dragend

mainImg.addEventListener("dragend", (event) => {
  document.body.style.backgroundColor = "white";
});
//event propagation
const btnParent = document.querySelector(".destination");

function changeParent(event) {
  btnParent.style.backgroundColor = "grey";
  event.stopPropagation();
}
btnParent.addEventListener("click", changeParent);

const btnChild = document.querySelector(".btn");

function changeChild(event) {
  btnChild.style.backgroundColor = "lime";
  event.stopPropagation();
}
btnChild.addEventListener("click", changeChild);