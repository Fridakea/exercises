"use strict";

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

window.addEventListener("DOMContentLoaded", generateBreadcrums);

function generateBreadcrums() {
  // Eventlistener som lytter til når knappen bliver klikket på og gør breadcrum stien "un-hidden"
  document.getElementById("generate").addEventListener("mousedown", () => {
    console.log("klikket knap");
    document.querySelector(".breadcrum").classList.remove("hidden");
  });

  // Her bruger jeg .forEach til at loope over arrayet bc, og som danner breadcrumlistepunkterne vha. innerHTML.
  // Jeg gør også brug af en konstant, seperator, som er en if statement, til at adskille listepunkterne med en /, bortset fra "last-child"
  // --> "last-child" svarer til listens længde -1, nemlig da det første element er 0
  bc.forEach((obj) => {
    const seperator = obj === bc[bc.length - 1] ? "" : " /";

    document.querySelector(
      ".breadcrum"
    ).innerHTML += `<li><a href="${obj.link}">${obj.name}</a></li>${seperator}`;
  });
}
