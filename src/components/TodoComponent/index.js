import { React, useState } from "react";
import "./TodoComponent.css";

const TodoComponent = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const reactiveStyles = {
    color: "#fff9eb",
    width: "30px",
    height: "30px",
    textAlign: "center",
    borderRadius: "30px",
    border: "none",
    fontFamily: "Chewy",
    fontSize: "20px",
    fontWeight: "1000",
    alignSelf: "center",
  };

  return (
    <li className="todo-component">
      <button
        className="todo-button"
        style={
          props.todo.isChecked
            ? { background: "#abe188", ...reactiveStyles }
            : { color: "#abe188" }
        }
        onClick={props.onToogleTodo}
      >
        ✓
      </button>
      <span
        className="todo-text"
        style={
          props.todo.isChecked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.todo.text}
      </span>
      <button
        className="todo-button"
        style={
          isHovered
            ? { background: "#e46471", ...reactiveStyles }
            : { color: "#e46471" }
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={props.onDeleteTodo}
      >
        x
      </button>
    </li>
  );
};

export { TodoComponent };
