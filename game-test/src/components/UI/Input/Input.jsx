import React from "react";
import s from "../Input/Input.Module.css";

const Input = ({ type, placeholder, value, onChange, styles }) => {
  return (
    <input
      className={`${s[styles]}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
