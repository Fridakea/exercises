"use strict";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

window.addEventListener("DOMContentLoaded", () => {
  bc.forEach((obj) => {
    document.querySelector(
      ".breadcrum"
    ).innerHTML += `<li><a href="${obj.link}">${obj.name}</a></li>`;
  });
});
