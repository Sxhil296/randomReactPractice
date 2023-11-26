import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decreaseCount() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  const addFive = () => {
    setCount((prevCount) => prevCount + 5);
  };
  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter value : {count}</h3>
      <button
        onClick={increaseCount}
        className="bg-green-800 py-1 px-2 rounded-md text-white"
      >
        +
      </button>
      <br />
      <button
        onClick={decreaseCount}
        className="bg-red-800 py-1 px-2 rounded-md text-white"
      >
        -
      </button>
      <br />
      <button
        onClick={addFive}
        className="bg-green-800 py-1 px-2 rounded-md text-white"
      >
        +5
      </button>
    </>
  );
};

export default Counter;
