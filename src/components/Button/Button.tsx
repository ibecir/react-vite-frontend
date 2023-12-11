import { MouseEvent, ReactNode } from "react";
import { ButtonColors } from "../../constants";

type ButtonProps = {
  children: ReactNode;
  color?: ButtonColors;
  onClick: (event: MouseEvent) => void;
};
const Button = ({
  children,
  color = ButtonColors.primary,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={"btn btn-" + color}
      onClick={(event) => {
        onClick(event);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
