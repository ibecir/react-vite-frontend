import { ReactNode } from "react";

type AlertProps = {
  children: ReactNode;
};

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
