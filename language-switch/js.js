"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "";

document.querySelector(".language").addEventListener("change", (event) => {
  if (event.target.value === "danish") {
    locale = "da";
  } else if (event.target.value === "deutsch") {
    locale = "de";
  }
  changeLanguage();
});


function changeLanguage() {
    document.querySelector(texts[locale].texts[0].location).textContent = `${texts[locale].texts[0].text}`
    document.querySelector(texts[locale].texts[1].location).textContent = `${texts[locale].texts[1].text}`

  /*
  if (locale === "da") {
    document.querySelector(texts.da.texts[0].location).textContent = `${texts.da.texts[0].text}`
    document.querySelector(texts.da.texts[1].location).textContent = `${texts.da.texts[1].text}`
  } else if (locale === "de") {
    document.querySelector(texts.de.texts[0].location).textContent = `${texts.de.texts[0].text}`
    document.querySelector(texts.de.texts[1].location).textContent = `${texts.de.texts[1].text}`
  }*/
};