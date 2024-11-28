"use client";
import { useState, useEffect } from "react";

function useCounter(defaultNumber) {
  const [counter, setCounter] = useState(defaultNumber);
  const incrementCounter = () => setCounter(counter + 1);

  useEffect(() => {
    console.log("This is logged every time counter changes!");
  }, [counter]);

  return { incrementCounter, counter };
}

export default useCounter;
