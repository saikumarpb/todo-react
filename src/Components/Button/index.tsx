import React from "react";
import "./styles.css";

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

function Button({ buttonText, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Button;
