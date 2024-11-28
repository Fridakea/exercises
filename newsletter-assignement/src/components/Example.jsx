"use client";

// import React, { useEffect, useState } from "react";

// function Counter() {
//   const [counter, setCounter] = useState(0);

//   // Increase the value of the counter by 1
//   function incrementCounter() {
//     setCounter(counter + 1);
//   }

//   useEffect(() => {
//     console.log("This is logged every time counter changes!");
//   }, [counter]);

//   return (
//     <div>
//       <h1>Times clicked: {counter}</h1>
//       <button onClick={incrementCounter}>Click to increase!</button>
//     </div>
//   );
// }

// export default Counter;

import React from "react";

// importing the custom hook
import useCounter from "@/hooks/useCounter";

function Counter() {
  const { incrementCounter, counter } = useCounter(0);

  return (
    <div>
      <h1>Times clicked: {counter}</h1>
      <button onClick={incrementCounter}>Click to increase!</button>
    </div>
  );
}

export default Counter;
