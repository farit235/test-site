import React from "react";
import "./Input.css";

export default function Input(props) {
  return (
    <div className="input-wrapper">
      <div className="reuslt">
        <h3>{props.result}</h3>
      </div>
      <div className="workspace">
        <h6>{props.value}</h6>
      </div>
    </div>
  );
}
