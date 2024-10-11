"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const settings = {
  filter: null,
  sortBy: null,
  sortDir: "asc",
};

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
  // TODO: Add star
};

function start() {
  console.log("ready");

  loadJSON();

  // FUTURE: Add event-listeners to filter and sort buttons
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
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  buildList();
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

function buildList() {
  const currentList = allAnimals; // FUTURE: Filter and sort currentList before displaying

  displayList(currentList);
}

function displayList(animals) {
  // clear the display
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // TODO: Show star ⭐ or ☆

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // TODO: Add event listener to click on star
  const likeButtons = document.querySelectorAll(".like");

  likeButtons.forEach((likeButton) => {
    let isLiked = false;

    likeButton.addEventListener("mousedown", () => {
      if (isLiked) {
        console.log("liked");
        likeButton.classList.remove("unliked");

        isLiked = false;
      } else {
        console.log("not liked");
        likeButton.classList.add("unliked");

        isLiked = true;
      }
    });
  });

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

function animalLiked(likeButton) {
  if (like === false) {
    likeButton.classList.remove("unliked");

    like = true;
  } else {
    likeButton.classList.add("unliked");
  }
}
