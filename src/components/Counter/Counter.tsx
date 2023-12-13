import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Its value is: " + count);

    return () => {
      console.log("I'm being cleaned up!");
    };
  }, [count]);

  return (
    <>
      <h1>Count value is {count}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
