"use client";

import useStore from "../store/state";

const Count = () => {
  const { count, setCount } = useStore();

  return <section onClick={setCount}>Count: {count}</section>;
};

export default Count;
