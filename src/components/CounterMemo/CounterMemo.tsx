import { useMemo, useState } from "react";
import { memoInitialItems } from "../../constants";

const CounterMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(memoInitialItems);

  const selectedItem = useMemo(() => {
    const selectedItem = items.find((item) => {
      if (item.id === count) return item;
    });
    return selectedItem;
  }, [items, count]);

  return (
    <div>
      <h1>Count {count}</h1>
      <h1>Selected item {selectedItem?.id}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default CounterMemo;
