import { FC } from "react";

type Props = {
  todos: string[];
};

export const List: FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <div className="flex flex-row justify-between">
          <p>{todos}</p>
          <div className="flex flex-row">
            <button>Complete</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};
