import React from "react";
import { TodoContext } from "../../TodoContext";
import "./ButtonComponent.css";

const ButtonComponent = (props) => {
  const {setOpenModal} = React.useContext(TodoContext)
  const onClickButton = () => {
    setOpenModal(true)
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
