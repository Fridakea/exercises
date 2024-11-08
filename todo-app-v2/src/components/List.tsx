"use client";

import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Todo } from "./ToDoApp";

type Props = {
  todos: Todo[];
  toggleDone: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const List: FC<Props> = ({ todos, toggleDone, deleteTodo }) => {
  const completeTaskStyling = "line-through";

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex flex-row justify-between">
          <span className={twMerge(todo.complete ? completeTaskStyling : "")}>
            {todo.task}
          </span>
          <div className="flex flex-row">
            <button onClick={() => toggleDone(todo.id)}>Complete</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
