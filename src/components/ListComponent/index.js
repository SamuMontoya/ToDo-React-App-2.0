import React from "react";
import "./ListComponent.css";

const ListComponent = ({children, onClickButton}) => {
  return (
    <div className="list-component">
      <div className="headList">
        <h2 className="title">List ToDo's</h2>
        <button className="btn" onClick={onClickButton}>Create</button>
      </div>
      <ul className="todos-space">
        {children}
      </ul>
    </div>
  );
};

export { ListComponent };
