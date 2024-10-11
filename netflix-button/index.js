"use strict";

window.addEventListener("DOMContentLoaded", startAnimation);

function startAnimation() {
  console.log("animation startet");

  let mouseMoved = false;

  // Animation på knappen
  const animation = document
    .querySelector("#progress")
    .animate([{ width: "0" }, { width: "100%" }], {
      duration: 4000,
      iterations: 1,
    });

  // Hvad skal der ske når animationen er slut
  animation.onfinish = () => {
    console.log("animation slut");
    if (!mouseMoved) {
      playNextEpisode();
    } else {
      document.querySelector("#progress").style.width = "100%";
    }
  };

  // Registerer hvis musen er flyttet
  document.querySelector("button").addEventListener("mousemove", () => {
    console.log("mus flyttet");
    mouseMoved = true;
  });

  // Eventlistener som lytter til hvis knappen klikkes på
  document.querySelector("button").addEventListener("mousedown", () => {
    console.log("knap klikket");
    animation.cancel();
    playNextEpisode();
  });

  // Når "næste episode afspilles" --> Som ændre baggrundsfarven og fjerner animationen på knappen
  console.log(animation);
  function playNextEpisode() {
    document.body.style.backgroundColor = "yellow";
    document.querySelector("#progress").style.width = "0";
  }
}
