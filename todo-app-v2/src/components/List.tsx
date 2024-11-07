"use client";

import { FC } from "react";
import { Todo } from "./ToDoApp";

type Props = {
  todos: Todo[];
  toggleDone: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const List: FC<Props> = ({ todos, toggleDone, deleteTodo }) => {
  const completeTaskStyling = "bg-red-500";

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex flex-row justify-between">
          {todo.task}
          {todo.complete ? "D" : ""}
          <div className="flex flex-row">
            <button onClick={() => toggleDone(todo.id)}>Complete</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
