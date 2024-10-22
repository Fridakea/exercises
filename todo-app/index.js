"use strict";

const todoList = [];

let ul;

window.addEventListener("DOMContentLoaded", () => {
  ul = document.querySelector(".todo-list ul");

  document.getElementById("add-todo").addEventListener("mousedown", addTodo);
});

function drawTodoList() {
  // clear the list before inserting the list (so the todo's only appear once)
  ul.innerHTML = "";

  todoList.forEach((object) => {
    // instead of doing this
    //ul.innerHTML += `<li id="${object.id}"><span>${object.task}</span><button>x</button</li>`;
    // I do this:

    // Creates li element with object.id as it's id
    const li = document.createElement("li");
    li.id = object.id;

    // Creates span and sets it's textcontent to object.task
    const span = document.createElement("span");
    span.textContent = object.task;

    const button = document.createElement("button");
    button.textContent = "x";

    // Creates li inside the ul, and the span and button inside the li
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);

    span.addEventListener("mousedown", () => {
      object.done = !object.done; // toggle true/false
      span.style.textDecoration = object.done ? "line-through" : "none";
    });

    button.addEventListener("mousedown", () => {
      console.log(todoList.indexOf(object));
      todoList.splice(todoList.indexOf(object), 1);
      drawTodoList();
    });
  });
}

function addTodo() {
  console.log("Todo added");

  // The value of the text that will become a todo
  const input = document.querySelector("#todo-string");
  const inputValue = input.value;

  const todo = {
    id: self.crypto.randomUUID(),
    task: inputValue,
    done: false,
  };

  todoList.push(todo);
  console.log("todoList:", todoList);
  drawTodoList();
}
