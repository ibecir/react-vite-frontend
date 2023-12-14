import { useEffect, useRef } from "react";

const InputRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Waiting for input" />
    </div>
  );
};

export default InputRef;
