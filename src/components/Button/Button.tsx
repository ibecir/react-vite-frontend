import { MouseEvent, ReactNode } from "react";
import { ButtonColors } from "../../constants";

type ButtonProps = {
  children: ReactNode;
  color?: ButtonColors;
  onClick: (event: MouseEvent) => void;
};
const Button = ({ color, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={"btn btn-" + color}
      onClick={(event) => {
        rest.onClick(event);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
