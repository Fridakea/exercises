"use strict";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

window.addEventListener("DOMContentLoaded", generateBreadcrums);

function generateBreadcrums() {
  document.getElementById("generate").addEventListener("mousedown", () => {
    console.log("klikket knap");
    document.querySelector(".breadcrum").classList.remove("hidden");
  });

  bc.forEach((obj) => {
    const seperator = obj === bc[bc.length - 1] ? "" : " /";

    document.querySelector(
      ".breadcrum"
    ).innerHTML += `<li><a href="${obj.link}">${obj.name}</a></li>${seperator}`;
  });
}
