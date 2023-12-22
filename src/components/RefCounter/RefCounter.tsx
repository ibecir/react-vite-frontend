import { useRef, useState } from "react";

const RefCounter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current += 1;

    console.log("State is " + count);
    console.log("Ref is " + countRef.current);
  };

  return (
    <div>
      Count: {count}
      <button className="btn btn-default" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default RefCounter;
