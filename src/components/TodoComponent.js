import { React, useState } from "react";

const TodoComponent = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    container: {
      background: "#FFF9EB",
      listStyleType: "none",
      borderRadius: "25px",
      padding: "15px",
      color: "#0D253F",
      fontFamily: "Chewy",
      fontSize: "20px",
      marginTop: "15px",
      display: "flex",
      justifyContent: "space-around",
    },
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
    },
    inactiveStyles: {
      color: "#abe188",
      border: "none",
      background: "none",
      fontFamily: "Chewy",
      fontSize: "20px",
    },
    invectiveDelete: {
      color: "#e46471",
      border: "none",
      background: "none",
      fontFamily: "Chewy",
      fontSize: "20px",
    }
  };
  
  const onComplete = () => {
    console.log("You have completed: " + props.todo.text)
  }

  const onDelete = () => {
    console.log("You have deleted: " + props.todo.text)
  }

  return (
    <div className="todo-component">
      <li style={style.container}>
        <button
          style={props.todo.isChecked ? style.activeStyles : style.inactiveStyles}
          onClick={onComplete}
        >
          ✓
        </button>
        <span style={props.todo.isChecked ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{props.todo.text}</span>
        <button
          style={isHovered ? style.hoverStyles : style.invectiveDelete}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onDelete}
        >
          x
        </button>
      </li>
    </div>
  );
};

export { TodoComponent };
