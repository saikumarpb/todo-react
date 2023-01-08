import React from "react";
import "./styles.css";
import { ButtonProps } from "./types";

function Button({ buttonText, onClick }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default Button;
