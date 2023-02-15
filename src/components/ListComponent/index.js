import React from "react";
import { ButtonComponent } from "../ButtonComponent";
import "./ListComponent.css";

const ListComponent = (props) => {
  return (
    <div className="list-component">
      <div className="headList">
        <h2 className="title">List ToDo's</h2>
        <ButtonComponent text="Create" />
      </div>
      <ul>{props.children}</ul>
    </div>
  );
};

export { ListComponent };
