import React from "react";
import { TodoContext } from "../../TodoContext";
import "./BarComponent.css";

const BarComponent = () => {
  const { onChangeSearch, searchValue } = React.useContext(TodoContext);
  return (
    <div className="bar-component">
      <input
        className="search"
        type="text"
        value={searchValue}
        placeholder="Search a ToDo..."
        onChange={onChangeSearch}
      ></input>
    </div>
  );
};

export { BarComponent };
