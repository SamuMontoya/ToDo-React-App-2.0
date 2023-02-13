import React from "react";
import { TitleComponent } from "./components/TitleComponent";
import { ProgressComponent } from "./components/ProgressComponent";
import { BarComponent } from "./components/BarComponent";
import { ListComponent } from "./components/ListComponent";
import { TodoComponent } from "./components/TodoComponent";

const todosArray = [
  
];

function App(props) {
  return (
    <React.Fragment>
      <TitleComponent />
      <ProgressComponent />
      <BarComponent />
      <ListComponent>
        { todosArray.length > 0 ?
            todosArray.map((todo) => (
              <TodoComponent text={todo.text} key={todo.text} />
            )) : <p>No items to display</p>    
        }
      </ListComponent>
    </React.Fragment>
  );
}

export default App;
