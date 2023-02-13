import React from "react";
import { HeaderComponent } from "./components/HeaderComponent";
import { BarComponent } from "./components/BarComponent";
import { ListComponent } from "./components/ListComponent";
import { TodoComponent } from "./components/TodoComponent";
import "./App.css";

const todosArray = [
  { text: "First Todo", isChecked: false},
  { text: "Second Todo", isChecked: true},
];
const style = {
  app: {
    backgroundColor: "#FFF9EB",
    position: "absolute",
    width: "100%",
    height: "100vh"
  },
  empty: {
    background: "#fff9eb",
    color: "#0d253f",
    textAlign: "center",
    borderRadius: "25px",
    padding: "50px",
    marginTop: "15px",
    fontFamily: 'Chewy',
    fontSize: "20px",
  }
}

function App() {
  return (
    <div style={style.app}>
      <HeaderComponent />
      <BarComponent />
      <ListComponent >
        { todosArray.length > 0 ?
            todosArray.map((todo) => (
              <TodoComponent todo={todo} key={todo.text} />
            )) : <p style={style.empty}>No items to display</p>    
        }
      </ListComponent>
    </div>
  );
}

export default App;
