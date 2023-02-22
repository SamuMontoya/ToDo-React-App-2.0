import React from "react";
import "./BarComponent.css";

const BarComponent = ({ searchValue, onChangeSearch, dataState }) => {
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
