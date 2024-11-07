"use client";

import { FC, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

export type Todo = {
  id: string;
  task: string;
  complete: boolean;
};

export const ToDoApp: FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (newTask: string) => {
    console.log("Adding new todo: ", newTask);
    setTodoList([
      {
        id: crypto.randomUUID(),
        task: newTask,
        complete: false,
      },
      ...todoList,
    ]);
  };

  const toggleDone = (id: string) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) return { ...task, complete: !task.complete };
        else return task;
      })
    );
  };

  console.log(todoList);

  return (
    <section className="w-screen h-screen max-w-[1000px] mx-auto">
      <h1>Todo app:</h1>
      <Form onSubmit={addTodo} />

      <div>
        <List
          todos={todoList}
          toggleDone={toggleDone}
          deleteTodo={(id) => console.log("delete todo with id ", id)}
        />
      </div>
    </section>
  );
};
