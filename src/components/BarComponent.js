import React from "react";
import { ButtonComponent } from "./ButtonComponent";

const BarComponent = () => {
  const style = {
    container: {
      display: "flex",
      width: "90%",
      justifyContent: "space-around",
      padding: "15px",
      borderRadius: "40px",
      margin: "0 auto",
      background: "#E46471",
      fontFamily: "chewy",
      color: "#0D253F",
      fontSize: "25px",
    },
    search: {
        fontFamily: "Chewy",
        width: "100%",
        height: "40px",
        borderRadius: "20px",
        padding: "0 15px",
        border: "none",
    }
  };

  return (
    <div className="bar-component" style={style.container}>
      <input style={style.search} type="text" placeholder="Search a ToDo..."></input>
    </div>
  );
};

export { BarComponent };
