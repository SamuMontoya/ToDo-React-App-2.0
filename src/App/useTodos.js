import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    dataState,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter((todo) => !!todo.isChecked).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  if (searchValue.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toogleTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].isChecked = !newTodos[todoIndex].isChecked;
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      isChecked: false,
      text,
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickButton = () => {
    setOpenModal(true);
  };

  return {
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toogleTodo,
        deleteTodo,
        dataState,
        onChangeSearch,
        openModal,
        setOpenModal,
        addTodo,
        onClickButton,
      }
}

export { useTodos };
