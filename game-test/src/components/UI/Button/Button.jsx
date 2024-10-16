import React from "react";
import s from "../../UI/Button/Button.module.css";

const Button = ({ text, onClick, styles, children }) => {
  return (
    <button className={`${s[styles]}`} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
