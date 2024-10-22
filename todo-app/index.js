"use strict";

let randomId = self.crypto.randomUUID();

let todo = {};
const todoList = [];

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("add-todo").addEventListener("mousedown", addTodo);

  todoList.splice(0, 1);
});

function addTodo() {
  console.log("Todo added");

  // The value of the text that will become a todo
  const input = document.querySelector("#todo-string");
  const inputValue = input.value;

  todo = {
    id: randomId,
    task: inputValue,
    done: false,
  };

  todoList.push(todo);
  console.log("todoList:", todoList);

  // clear the list before inserting the list (so the todo's only appear once)
  document.querySelector(".todo-container .todo-list ul").innerHTML = "";

  todoList.forEach((element) => {
    document.querySelector(
      ".todo-container .todo-list ul"
    ).innerHTML += `<li>${element.task}<button>x</button</li>`;

    document
      .querySelectorAll(".todo-container .todo-list ul li")
      .forEach((liElement) => {
        liElement.addEventListener("mousedown", () => {
          if (element.done === false) {
            console.log(element.task, "done");
            liElement.style.textDecoration = "line-through";
            todo.done = true;
          } else {
            console.log(element.task, "not done");
            liElement.style.textDecoration = "none";
            todo.done = false;
          }
        });
      });

    document.querySelector("button").addEventListener("mousedown", () => {
      console.log("slet");
      console.log(todoList.element);

      // todoList.splice(0, 1);

      todoList.push(todo);
    });
  });

  // document
  //   .querySelectorAll(".todo-container .todo-list ul li")
  //   .forEach((todoElement) => {
  //     todoElement.addEventListener("mousedown", () => {
  //       console.log("færdig");
  //       console.log(todo.done);

  //       if (todo.done === false) {
  //         todoElement.style.textDecoration = "line-through";

  //         todo.done = true;
  //       } else {
  //         todoElement.style.textDecoration = "none";

  //         todo.done = false;
  //       }
  //     });

  //     document.querySelector("span").addEventListener("mousedown", () => {
  //       console.log("slet");

  //       todoList.push(todo);
  //     });
  //   });

  // if (todo.done === "true") {
  //   document.querySelector(
  //     ".todo-container .todo-done ul"
  //   ).innerHTML += `<li>${todo.task}</li>`;
  // }
}
