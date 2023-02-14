import React from "react";
import { CircleProgress } from "./CircleProgress";
import './ProgressComponent.css'

const ProgressComponent = (props) => {
  return (
    <div className="progress-component">
      <CircleProgress
        completedTodos={ props.completedTodos }
        totalTodos ={ props.totalTodos }
        circleWidth="200"
      />
    </div>
  );
};

export { ProgressComponent };
