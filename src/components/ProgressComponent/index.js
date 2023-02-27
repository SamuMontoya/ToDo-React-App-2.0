import React from "react";
import './ProgressComponent.css'

const ProgressComponent = (props) => {
  return <div className="progress-component">{props.children}</div>;
};

export { ProgressComponent };
