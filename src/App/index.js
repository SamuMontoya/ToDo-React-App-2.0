import React from "react";
import { useTodos } from "./useTodos"
import { HeaderComponent } from "../components/HeaderComponent";
import { ProgressComponent } from "../components/ProgressComponent";
import { CircleProgress } from "../components/ProgressComponent/CircleProgress";
import { BarComponent } from "../components/BarComponent";
import { ListComponent } from "../components/ListComponent";
import { ModalComponent } from "../components/ModalComponent";
import { FormComponent } from "../components/FormComponent";
import { TodoComponent } from "../components/TodoComponent";

function App() {
  const {
    dataState,
    totalTodos,
    searchedTodos,
    toogleTodo,
    deleteTodo,
    completedTodos,
    setOpenModal,
    addTodo,
    onChangeSearch,
    searchValue,
    openModal,
    onClickButton,
  } = useTodos();

  return (
    <div className="app">
      <HeaderComponent>
        <ProgressComponent>
          <CircleProgress
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            circleWidth="200"
          />
        </ProgressComponent>
      </HeaderComponent>
      <BarComponent 
        onChangeSearch={onChangeSearch}
        searchValue={searchValue}
      />
      <ListComponent onClickButton={onClickButton}>
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
          <FormComponent addTodo={addTodo} setOpenModal={setOpenModal} />
        </ModalComponent>
      )}
    </div>
  );
}

export default App;
