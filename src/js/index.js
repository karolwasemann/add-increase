import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const btn = document.querySelector("button");
const liItems = document.querySelectorAll("li");

let fontSize = 10;

// const add = function () {
//   console.log("działa");
//   for (let i = 0; i < 10; i++) {
//     liItems[i].style.fontSize = `${fontSize}px`;
//     liItems[i].style.display = "block";
//   }
//   fontSize += 4;
// };

// btn.addEventListener("click", add);

btn.addEventListener("click", function () {
  liItems.forEach((li) => {
    li.style.display = "block";
    li.style.fontSize = `${fontSize}px`;
  });
  fontSize++;
});
