import React from "react";
import { useTodos } from "./useTodos";
import { HeaderComponent } from "../components/HeaderComponent";
import { ProgressComponent } from "../components/ProgressComponent";
import { CircleProgress } from "../components/ProgressComponent/CircleProgress";
import { BarComponent } from "../components/BarComponent";
import { ListComponent } from "../components/ListComponent";
import { ModalComponent } from "../components/ModalComponent";
import { FormComponent } from "../components/FormComponent";
import { TodoComponent } from "../components/TodoComponent";
import { ErrorComponent } from "../components/ErrorComponent";
import { LoadingComponent } from "../components/LoadingComponent";
import { NoTodosComponent } from "../components/NoTodosComponent";
import { NoMatchesComponent } from "../components/NoMatchesComponent";
import { ChangeStorage } from "../components/ChangeLocalStorage";

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
    syncronizeTodos,
    onCreating,
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
      <ListComponent
        dataState={dataState}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <ErrorComponent />}
        onEmptyTodos={() => <NoTodosComponent />}
        onNoMatches={() => <NoMatchesComponent searchValue={searchValue} />}
        onClickButton={onClickButton}
      >
        {(todo) => (
          <TodoComponent
            todo={todo}
            key={todo.text}
            onToogleTodo={() => toogleTodo(todo.text)}
            onDeleteTodo={() => deleteTodo(todo.text)}
          />
        )}
      </ListComponent>

      {!!openModal && (
        <ModalComponent 
          dataState={dataState}
          onCreating={onCreating}
          onLoading={() => <LoadingComponent />}
          onForm={() => <FormComponent addTodo={addTodo} setOpenModal={setOpenModal} />}
        />
      )}
      <ChangeStorage syncronizeTodos={syncronizeTodos} />
    </div>
  );
}

export default App;
