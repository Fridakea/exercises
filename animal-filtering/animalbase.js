"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  const filterButtons = document.querySelectorAll(".filter");

  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener("mousedown", () => {
      console.log("klikket knap");

      if (filterButton.dataset.filter === "cat") {
        console.log("filter kat");
        isCat();
      } else if (filterButton.dataset.filter === "dog") {
        console.log("filter hund");
        isDog();
      } else {
        displayList(allAnimals);
      }
    });
  });

  loadJSON();
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}

function isCat() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // Show only animal type of cat
  allAnimals.forEach((animal) => {
    if (animal.type === "cat") {
      displayAnimal(animal);
    }
  });
}

function isDog() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // Show only animal type of dog
  allAnimals.forEach((animal) => {
    if (animal.type === "dog") {
      displayAnimal(animal);
    }
  });
}

function compareName(a, b) {
  if (a.name < b.name) {
    return -1;
  } else {
    return 1;
  }
}
