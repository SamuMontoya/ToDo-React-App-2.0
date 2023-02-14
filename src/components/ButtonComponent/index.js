import React from "react";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
  const reactiveStyles = {
    background: "props.color",
  };

  const onClickButton = () => {
    alert("Modal Opening");
  };
  return (
    <div className="button-component">
      <button className="btn" onClick={onClickButton} style={reactiveStyles}>
        {props.text}
      </button>
    </div>
  );
};

export { ButtonComponent };
