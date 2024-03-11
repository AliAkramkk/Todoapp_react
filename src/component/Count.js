import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default Count;
