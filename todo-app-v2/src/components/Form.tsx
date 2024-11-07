"use client";

import { FC, ReactNode } from "react";

type Props = {
  onSubmit: (newTask: string) => void;
};

export const Form: FC<Props> = ({ onSubmit }) => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(formData.get("task") as string);
    e.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input name="task" className="text-black" type="text" />
      <button>Add</button>
    </form>
  );
};
