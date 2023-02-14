import React from "react";
import { HeaderComponent } from "./components/HeaderComponent";
import { ProgressComponent } from "./components/ProgressComponent";
import { BarComponent } from "./components/BarComponent";
import { ListComponent } from "./components/ListComponent";
import { TodoComponent } from "./components/TodoComponent";
import "./App.css";

function App() {
  const defaultTodos = [
    { text: "First Todo", isChecked: false },
    { text: "Second Todo", isChecked: true },
    { text: "Third Todo", isChecked: true },
    { text: "Fourth Todo", isChecked: false },
    { text: "Fifth Todo", isChecked: false },
  ];
  const style = {
    app: {
      backgroundColor: "#FFF9EB",
      position: "absolute",
      width: "100%",
      height: "100vh",
    },
    empty: {
      background: "#fff9eb",
      color: "#0d253f",
      textAlign: "center",
      borderRadius: "25px",
      padding: "50px",
      marginTop: "15px",
      fontFamily: "Chewy",
      fontSize: "20px",
    },
  };

  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter((todo) => !!todo.isChecked).length;
  const totalTodos = todos.length;
  let searchedTodos =[]
  if (searchValue.length == 0){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }
  
  return (
    <div style={style.app}>
      <HeaderComponent>
        <ProgressComponent completedTodos={completedTodos} totalTodos={totalTodos} />
      </HeaderComponent>
      <BarComponent searchValue={searchValue} setSearchValue={setSearchValue} />
      <ListComponent>
        {searchedTodos.length > 0 ? (
          searchedTodos.map((todo) => <TodoComponent todo={todo} key={todo.text} />)
        ) : (
          <p style={style.empty}>No items to display</p>
        )}
      </ListComponent>
    </div>
  );
}

export default App;
