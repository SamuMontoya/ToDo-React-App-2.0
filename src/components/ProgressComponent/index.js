import React from "react";
import { TodoContext } from "../../TodoContext";
import { CircleProgress } from "./CircleProgress";
import "./ProgressComponent.css";

const ProgressComponent = (props) => {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <div className="progress-component">
      <CircleProgress
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        circleWidth="200"
      />
    </div>
  );
};

export { ProgressComponent };
