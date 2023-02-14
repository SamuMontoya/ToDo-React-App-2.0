import { React, useState } from "react";
import { CircleProgress } from "./CircleProgress";

const style= {
  display: "flex",
  width: "100%",
  justifyContent: "center",
}

const ProgressComponent = (props) => {
  return (
    <div style={style} className="progress-component">
      <CircleProgress
        completedTodos={ props.completedTodos }
        totalTodos ={ props.totalTodos }
        circleWidth="200"
      />
    </div>
  );
};

export { ProgressComponent };
