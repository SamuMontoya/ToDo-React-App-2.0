import { React, useState } from "react";
import { CircleProgress } from "./CircleProgress";

const style= {
  display: "flex",
  width: "100%",
  justifyContent: "center",
}

const ProgressComponent = () => {
  const [percentage, setPercentage] = useState(72);
  return (
    <div style={style} className="progress-component">
      <CircleProgress
        percentage={percentage}
        circleWidth="200"
      />
    </div>
  );
};

export { ProgressComponent };
