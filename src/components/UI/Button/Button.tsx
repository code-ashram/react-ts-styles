import {FC, ReactNode} from "react";

import "./Button.css";

type Props = {
  buttonType?: "button" | "submit" | "reset" | undefined,
  children: ReactNode
}

const Button: FC<Props> = ({buttonType = "button", children}) => {
  return (
    <button type={buttonType} className="button">
      {children}
    </button>
  );
};

export default Button;
