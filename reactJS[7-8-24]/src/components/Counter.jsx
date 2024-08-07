// import React from 'react'

import { useState } from "react";

const Counter = () => {
//   let counter = 0;

  const [counter, setCounter] = useState(0);

  const increment = () => {
    // counter = counter + 1;
    setCounter(counter+1);
    console.log(counter);
  };

  const decrement = () => {
    // counter = counter - 1;
    setCounter(counter-1);
    console.log(counter);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h4>{counter}</h4>

      <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};
export default Counter;
