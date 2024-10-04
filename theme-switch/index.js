"use strict";

window.addEventListener("DOMContentLoaded", () => {
  console.log("vindue loadet");
  document.getElementById("theme").addEventListener("change", (theme) => {
    console.log("dropdown klikket");
    document
      .querySelector("#theme-container")
      .setAttribute("data-theme", `${theme.target.value}`);
  });
});
