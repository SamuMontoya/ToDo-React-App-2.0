import React from "react";
import { TodoContext } from "../../TodoContext";
import { TodoComponent } from "../TodoComponent";
import { ButtonComponent } from "../ButtonComponent";
import "./ListComponent.css";

const ListComponent = () => {
  const {dataState, totalTodos, searchedTodos, toogleTodo, deleteTodo} = React.useContext(TodoContext)
  return (
    <div className="list-component">
      <div className="headList">
        <h2 className="title">List ToDo's</h2>
        <ButtonComponent text="Create" />
      </div>
      <ul>
        {dataState.error && <p>Hubo un error</p>}
        {dataState.loading && <div className="loader no-todos"></div>}
        {!dataState.loading && totalTodos === 0 ? (
          <p className="no-todos">¡Create a new ToDo!</p>
        ) : !dataState.loading && searchedTodos.length === 0 ? (
          <p className="no-todos">There are no matches...</p>
        ) : (
          searchedTodos.map((todo) => (
            <TodoComponent
              todo={todo}
              key={todo.text}
              onToogleTodo={() => toogleTodo(todo.text)}
              onDeleteTodo={() => deleteTodo(todo.text)}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export { ListComponent };
