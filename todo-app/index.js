"use strict";

let randomId = self.crypto.randomUUID();

const todo = {
  id: 0,
  task: "-no description",
  number: 0,
  done: false,
};

const todoList = [{ todo }];

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-todo").addEventListener("mousedown", addTodo);
});

function addTodo() {
  console.log("Todo tilføjet");
  document.querySelector(
    ".todo-container .todo-list ul"
  ).innerHTML += `<li>Hej</li>`;
}
