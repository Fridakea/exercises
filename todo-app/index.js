// TODO
// 3. Sæt fokus på input feltet / få det til at virke
// 4. tilføj noget styling som gør det bedre

"use strict";

let todoList = [];

let ul;

window.addEventListener("DOMContentLoaded", () => {
  ul = document.querySelector(".todo-list ul");
  document.getElementById("add-todo").addEventListener("mousedown", addTodo);

  loadList();
  drawTodoList();
});

function drawTodoList() {
  // clear the list before inserting the list (so the todo's only appear once)
  ul.innerHTML = "";

  todoList.forEach((object) => {
    // instead of doing this - ul.innerHTML += `<li id="${object.id}"><span>${object.task}</span><button>x</button</li>`; - I do this (line 19-33)
    // Creates li element with object.id as it's id
    const li = document.createElement("li");
    li.id = object.id;

    // Creates span and sets it's textcontent to object.task
    const span = document.createElement("span");
    span.textContent = `${object.number ?? ""} ${object.task}`;
    span.style.textDecoration = object.done ? "line-through" : "none";

    const button = document.createElement("button");
    button.textContent = "x";

    // Creates li inside the ul, and the span and button inside the li
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);

    // Adding eventlistener to the span inside the li, that makes it possible to mark todo as done
    span.addEventListener("mousedown", () => {
      object.done = !object.done; // toggle true/false
      saveList();

      span.style.textDecoration = object.done ? "line-through" : "none";
      console.log(todoList);
    });

    // Adding eventlistener to the button inside the li, that makes it possible to delete todo
    button.addEventListener("mousedown", () => {
      console.log(todoList.indexOf(object));
      todoList.splice(todoList.indexOf(object), 1);

      saveList();
      drawTodoList();
    });
  });
}

function addTodo() {
  console.log("Todo added");

  // The value of the text in the input number, will become a todo
  const inputNumber = document.querySelector("#todo-number");
  let inputNumberValue = parseInt(inputNumber.value);

  // If the value of the input is empty, set it as 1
  if (isNaN(inputNumberValue)) {
    inputNumberValue = null;
  }

  // The value of the text in the input string, will become a todo
  const inputString = document.querySelector("#todo-string");
  const inputStringValue = inputString.value;

  // If the value of the input is empty, don't add it is a todo
  if (inputStringValue === "") {
    return;
  }

  const todo = {
    id: self.crypto.randomUUID(),
    number: inputNumberValue,
    task: inputStringValue,
    done: false,
  };

  todoList.push(todo);
  saveList();

  // Removes text from the input, so another todo can be made right away
  inputNumber.value = "";
  inputString.value = "";

  drawTodoList();
}

function saveList() {
  localStorage.setItem("todos", JSON.stringify(todoList));
}

function loadList() {
  todoList = localStorage.getItem("todos");
  todoList = JSON.parse(todoList);
}
