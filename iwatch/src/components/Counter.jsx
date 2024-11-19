"use client";

import useCounter from "../app/store/counterState";
import { Button } from "./Button";

export const Counter = () => {
  const counter = useCounter((state) => state.counter);
  const incrCounter = useCounter((state) => state.incrCounter);

  return (
    <div className="text-white">
      <h1 className="text-[54px] font-bold leading-loose">
        This is our counter section:
      </h1>
      <div className="flex items-center justify-between">
        <Button onClick={incrCounter} text={"Click to see the counter go up"} />
        <p className="text-lg">Counter: {counter}</p>
      </div>
    </div>
  );
};
