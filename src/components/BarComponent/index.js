import React from "react";
import { ButtonComponent } from "../ButtonComponent";
import "./BarComponent.css";

const BarComponent = ({ searchValue, setSearchValue }) => {
  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

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
