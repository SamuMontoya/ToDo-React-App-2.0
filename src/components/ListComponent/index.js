import React from "react";
import { TodoContext } from "../../TodoContext";
import { TodoComponent } from "../TodoComponent";
import { ButtonComponent } from "../ButtonComponent";
import "./ListComponent.css";

const ListComponent = ({children}) => {
  return (
    <div className="list-component">
      <div className="headList">
        <h2 className="title">List ToDo's</h2>
        <ButtonComponent text="Create" />
      </div>
      <ul className="todos-space">
        {children}
      </ul>
    </div>
  );
};

export { ListComponent };
