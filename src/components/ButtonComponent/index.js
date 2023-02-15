import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
  const onClickButton = () => {
    alert("Modal Opening");
  };
  return (
    <div className="button-component">
      <button className="btn" onClick={onClickButton}>
        {props.text}
      </button>
    </div>
  );
};

export { ButtonComponent };
