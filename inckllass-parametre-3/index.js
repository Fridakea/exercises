"use strict";

// function presentPet(firstName, animalType, animalName) {
// `My name is ${firstName}, I have a ${animalType} called ${animalName}`
// }

const firstName = "Frida";
const animalType = "dog";
const animalName = "Mokka";

presentPet(firstName, animalType, animalName);

function presentPet(firstName, animalType, animalName) {
    console.log(`My name is ${firstName}, I have a ${animalType} called ${animalName}`);
}
