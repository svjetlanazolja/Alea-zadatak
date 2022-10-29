import React from "react";
import "./style.css";

const STYLES = [
  "btn--primary",
  "btn--nav",
  "btn--yellow",
  "btn--shop",
  "btn--join",
  "btn--more",
];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize, icon }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} `}
      onClick={onClick}
      type={type}
    >
      {/* <img src={icon} alt="icon" className="" /> */}
      {children}
    </button>
  );
};

export default Button;
