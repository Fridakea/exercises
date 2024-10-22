"use strict";

let randomId = self.crypto.randomUUID();

let todo = {};

const todoList = [{ todo }];

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-todo").addEventListener("mousedown", addTodo);
});

function addTodo() {
  console.log("Todo tilføjet");

  const input = document.querySelector("#todo-string");
  const inputValue = input.value;

  console.log(inputValue);

  todo = {
    id: randomId,
    task: inputValue,
    done: false,
  };

  todoList.push(todo);

  console.log(todoList);

  console.log(todo);

  document.querySelector(
    ".todo-container .todo-list ul"
  ).innerHTML += `<li>${todo.task}<span>x</span</li>`;

  document
    .querySelectorAll(".todo-container .todo-list ul li")
    .forEach((todoElement) => {
      todoElement.addEventListener("mousedown", () => {
        console.log("færdig");
        console.log(todo.done);

        if (todo.done === false) {
          todoElement.style.textDecoration = "line-through";

          todo.done = true;
        } else {
          todoElement.style.textDecoration = "none";

          todo.done = false;
        }
      });

      document.querySelector("span").addEventListener("mousedown", () => {
        console.log("slet");

        todoList.push(todo);
      });
    });

  if (todo.done === "true") {
    document.querySelector(
      ".todo-container .todo-done ul"
    ).innerHTML += `<li>${todo.task}</li>`;
  }
}
