"use strict";

// Array med gode og dårlige ord
const curseWords = [
  { bad: "var", good: "<span>const</span>" },
  { bad: "float", good: "<span>grid</span>" },
  { bad: "marquee", good: "<span>just don't</span>" },
];

let paragraph =
  "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

let textElement;

console.log("curseWords:", curseWords);
console.log("paragraph:", paragraph);
console.log(paragraph.replace("var", "const"));

// if ()

window.addEventListener("DOMContentLoaded", () => {
  textElement = document.querySelector(".text");
  textElement.textContent = paragraph;
  document.querySelector("button").addEventListener("mousedown", clickedOnce);
});

let isClicked = false;

function clickedOnce() {
  if (isClicked) alert("Du er allerede Safe For Work");
  else {
    curseWords.forEach((word) => {
      textElement.innerHTML = textElement.innerHTML.replace(
        word.bad,
        word.good
      );
    });
    isClicked = true;
  }
}
