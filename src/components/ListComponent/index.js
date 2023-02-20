import React from "react";
import "./ListComponent.css";

const ListComponent = (props) => {
  return (
    <div className="list-component">
      <div className="headList">
        <h2 className="title">List ToDo's</h2>
        <button className="btn" onClick={props.onClickButton}>Create</button>
      </div>
      {props.dataState.error && props.onError()}
      {props.dataState.loading && props.onLoading()}
      {(!props.dataState.loading && props.searchedTodos.length === 0) && props.onEmptyTodos()}
      <ul className="todos-space">
        {props.searchedTodos.map(props.render)}
      </ul>
    </div>
  );
};

export { ListComponent };
