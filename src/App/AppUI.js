import React from "react";
import "./App.css";
import { TodoContext } from "../TodoContext";
import { HeaderComponent } from "../components/HeaderComponent";
import { ProgressComponent } from "../components/ProgressComponent";
import { BarComponent } from "../components/BarComponent";
import { ListComponent } from "../components/ListComponent";
import { ModalComponent } from "../components/ModalComponent";
import { FormComponent } from "../components/FormComponent";
import { TodoComponent } from "../components/TodoComponent";

function AppUI() {
  const { openModal } = React.useContext(TodoContext);
  const {dataState, totalTodos, searchedTodos, toogleTodo, deleteTodo} = React.useContext(TodoContext)
  return (
    <div className="app">
      <HeaderComponent>
        <ProgressComponent />
      </HeaderComponent>
      <BarComponent />
      <ListComponent>
        {dataState.error && <p>Hubo un error</p>}
        {dataState.loading && <div className="loader no-todos"></div>}
        {!dataState.loading && totalTodos === 0 ? (
          <p className="no-todos">💡 Create a new ToDo ⤴️</p>
        ) : !dataState.loading && searchedTodos.length === 0 ? (
          <p className="no-todos">🤯 There are no matches... </p>
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
      </ListComponent>
      {!!openModal && (
        <ModalComponent>
          <FormComponent />
        </ModalComponent>
      )}
    </div>
  );
}

export { AppUI };
