"use client";

import { FC, useState } from "react";
import { List } from "./List";

export const ToDoApp: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    todos.push(inputValue);
    setInputValue("");
  };

  console.log(todos);

  return (
    <section className="w-screen h-screen">
      <h1>Todo app:</h1>
      <input
        className="text-black"
        type="text"
        value={inputValue}
        onInput={(e) => setInputValue(e.currentTarget.value)}
      />
      <button onClick={addTodo}>Add</button>

      <div>
        <List todos={todos} />
      </div>
    </section>
  );
};
