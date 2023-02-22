import React from "react";
import "./ListComponent.css";

const ListComponent = (props) => {
  const renderFunction = props.children || props.render
  return (
    <div className="list-component">
      <div className="headList">
        <h2 className="title">List ToDo's</h2>
        <button className="btn" onClick={props.onClickButton}>Create</button>
      </div>
      {props.dataState.error && props.onError()}
      {(!props.dataState.loading && props.totalTodos === 0) && props.onEmptyTodos()}
      {(!!props.totalTodos && props.searchedTodos.length === 0) && props.onNoMatches()}
      <ul className="todos-space">
        {props.searchedTodos.map(renderFunction)}
      </ul>
    </div>
  );
};

export { ListComponent };
