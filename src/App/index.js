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
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

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
    saveTodos,
    todos,
    onEditing,
    setOnEditing,
    setOnCreating,
    todoClick,
    editableTodo,
    setEditableTodo,
    editTodo,
  } = useTodos();

  return (
    <div className="main-container">
      <HeaderComponent>
        <ProgressComponent>
          <CircleProgress
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            circleWidth="200"
          />
        </ProgressComponent>
      </HeaderComponent>
      <div className="main-content">
        <BarComponent
          onChangeSearch={onChangeSearch}
          searchValue={searchValue}
        />
        <DragDropContext
          onDragEnd={(param) => {
            const srcI = param.source.index;
            const desI = param.destination?.index;
            if (desI !== undefined) {
              todos.splice(desI, 0, todos.splice(srcI, 1)[0]);
            } else {
              todos.splice(desI, 0, todos[srcI]);
              if (srcI < desI) {
                todos.splice(srcI, 1);
              } else {
                todos.splice(srcI + 1, 1);
              }
            }
            saveTodos(todos);
          }}
          options={{ autoScroll: true }}
        >
          <ListComponent
            dataState={dataState}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            onError={() => <ErrorComponent />}
            onEmptyTodos={() => <NoTodosComponent />}
            onNoMatches={() => <NoMatchesComponent searchValue={searchValue} />}
            onClickButton={onClickButton}
          >
            <Droppable droppableId="droppable-1" direction="vertical">
              {(provided, _) => (
                <div
                  className="scrol-list"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {searchedTodos.map((todo, i) => (
                    <Draggable
                      key={todo.id}
                      draggableId={"draggable-" + todo.id}
                      index={i}
                    >
                      {(provided, _) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TodoComponent
                            todo={todo}
                            setOpenModal={setOpenModal}
                            setOnEditing={setOnEditing}
                            todoClick={() => todoClick(todo)}
                            onToogleTodo={() => toogleTodo(todo.id)}
                            onDeleteTodo={() => deleteTodo(todo.id)}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </ListComponent>
        </DragDropContext>
      </div>
      {!!openModal && (
        <ModalComponent
          dataState={dataState}
          onCreating={onCreating}
          onEditing={onEditing}
          onLoading={() => <LoadingComponent />}
          onForm={() => (
            <FormComponent
              addTodo={addTodo}
              editableTodo={editableTodo}
              setEditableTodo={setEditableTodo}
              setOpenModal={setOpenModal}
              onCreating={onCreating}
              onEditing={onEditing}
              setOnEditing={setOnEditing}
              setOnCreating={setOnCreating}
              editTodo={editTodo}
            />
          )}
        />
      )}
      <ChangeStorage syncronizeTodos={syncronizeTodos} />
    </div>
  );
}

export default App;
