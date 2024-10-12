"use strict";

const keaLink = "https://kea-alt-del.dk/kata-distortion/";

let currentInQueue = 0;

window.addEventListener("DOMContentLoaded", () => {
  updateData();

  // set interval, som gør at dataen bliver hentet hvert 10. sekundt og dermed opdatere
  setInterval(() => {
    updateData();
  }, 10000);
});

// Funktionen som henter dataen
function updateData() {
  fetch(keaLink)
    .then((response) => response.json())
    .then((data) => showData(data));
}

function showData(data) {
  console.log("data:", data.inQueue);

  const progressBar = document.querySelector(".progress-bar");

  // Animation som gør at progress baren stiger/falder fra den nuværende værdi inQueue til den nye værdi
  progressBar.animate(
    [
      // Keyframes
      { width: `${currentInQueue}%` },
      { width: `${data.inQueue * 4}%` },
    ],
    {
      // animation options
      duration: 1000,
      iterations: 1,
    }
  );

  // Sætter bredden til den nye inQueue værdi og opdaterer den nuværende inQueue værdi
  progressBar.style.width = `${data.inQueue * 4}%`;
  document.querySelector(
    ".progress-bar h3"
  ).textContent = `${data.inQueue} i kø`;
  currentInQueue = data.inQueue * 4;

  progressBar.style.backgroundColor = `hsl(${
    100 - data.inQueue * 4
  }, 80%, 50%)`;
}
