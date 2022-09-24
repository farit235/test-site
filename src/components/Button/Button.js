import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div
      className="button-wrapper"
      onClick={() => props.handleClick(props.value)}
    >
      {props.value}
    </div>
  );
}
