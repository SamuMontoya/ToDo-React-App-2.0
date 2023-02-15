import React from "react";
import { TodoContext } from "../../TodoContext";
import { ButtonComponent } from "../ButtonComponent";
import "./BarComponent.css";

const BarComponent = ({ searchValue, setSearchValue }) => {
  return (
    <TodoContext.Consumer>
      {({ onChangeSearch }) => (
        <div className="bar-component">
          <input
            className="search"
            type="text"
            value={searchValue}
            placeholder="Search a ToDo..."
            onChange={onChangeSearch}
          ></input>
        </div>
      )}
    </TodoContext.Consumer>
  );
};

export { BarComponent };
