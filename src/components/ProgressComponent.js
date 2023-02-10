import { React, useState } from "react";
import { CircleProgress } from "./CircleProgress";

const ProgressComponent = () => {
  const [percentage, setPercentage] = useState(35);
  return (
    <div className="progress-component">
      <CircleProgress
        percentage={percentage}
        circleWidth="200"
      />
      <input
        type="range"
        min="0"
        max="99"
        step="1"
        value={percentage}
        onChange={(event) => setPercentage(event.target.value)}
      />
    </div>
  );
};

export { ProgressComponent };
