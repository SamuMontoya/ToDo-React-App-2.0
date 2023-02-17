import React from "react";
import "./ProgressComponent.css";

const ProgressComponent = ({children}) => {
  return (
    <div className="progress-component">
      {children}
    </div>
  );
};

export { ProgressComponent };
