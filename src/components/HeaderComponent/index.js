import React from "react";
import "./HeaderComponent.css";

const HeaderComponent = ({ children }) => {
  return (
    <header className="container">
      <h1 className="mainTitle">ToDo</h1>
      <h3 className="secondTitle">Productivity App</h3>
      {children}
    </header>
  );
};

export { HeaderComponent };
