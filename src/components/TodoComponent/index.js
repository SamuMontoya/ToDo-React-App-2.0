import { React, useState } from "react";
import "./TodoComponent.css";

const TodoComponent = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const reactiveStyles = {
    hoverStyles: {
      background: "#e46471",
      color: "#fff9eb",
      width: "30px",
      height: "30px",
      textAlign: "center",
      borderRadius: "30px",
      border: "none",
      fontFamily: "Chewy",
      fontSize: "20px",
    },
    activeStyles: {
      background: "#abe188",
      color: "#fff9eb",
      width: "30px",
      height: "30px",
      textAlign: "center",
      borderRadius: "30px",
      border: "none",
      fontFamily: "Chewy",
      fontSize: "20px",
      fontWeight: "1000",
    },
    inactiveStyles: {
      color: "#abe188",
      border: "none",
      background: "none",
      fontFamily: "Chewy",
      fontSize: "20px",
      fontWeight: "1000",
    },
    invectiveDelete: {
      color: "#e46471",
      border: "none",
      background: "none",
      fontFamily: "Chewy",
      fontSize: "20px",
    },
  };

  return (
    <li className="todo-component">
      <button
        style={
          props.todo.isChecked
            ? reactiveStyles.activeStyles
            : reactiveStyles.inactiveStyles
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
            ? reactiveStyles.hoverStyles
            : reactiveStyles.invectiveDelete
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
