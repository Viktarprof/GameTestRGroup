import React from "react";
import s from "../../UI/Button/Button.module.css";

const Button = ({ text, onClick, styles, icon }) => {
  return (
    <button className={`${s[styles]}`} onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};

export default Button;
