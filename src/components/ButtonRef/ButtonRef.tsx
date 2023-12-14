import { useRef } from "react";
const ButtonRef = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
    }
  };
  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        Change by background
      </button>
    </div>
  );
};

export default ButtonRef;
