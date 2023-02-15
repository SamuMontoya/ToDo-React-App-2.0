import React from "react";
import { TodoContext } from "../../TodoContext";
import { CircleProgress } from "./CircleProgress";
import "./ProgressComponent.css";

const ProgressComponent = (props) => {
  return (
    <TodoContext.Consumer>
      {({ completedTodos, totalTodos }) => (
        <div className="progress-component">
        <CircleProgress
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          circleWidth="200"
        />
      </div>
      )}
    </TodoContext.Consumer>
  );
};

export { ProgressComponent };
