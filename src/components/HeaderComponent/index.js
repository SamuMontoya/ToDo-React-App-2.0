import React from "react";
import "./HeaderComponent.css";

const HeaderComponent = (props) => {
  return (
    <div className="container">
      <h1 className="mainTitle">ToDo</h1>
      <h3 className="secondTitle">Productivity App</h3>
      {props.children}
    </div>
  );
};

export { HeaderComponent };
