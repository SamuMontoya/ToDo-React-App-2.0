import React from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { ProgressComponent } from "../components/ProgressComponent";
import { BarComponent } from "../components/BarComponent";
import { ListComponent } from "../components/ListComponent";
import "./App.css";

function AppUI() {
  return (
    <div className="app">
      <HeaderComponent>
        <ProgressComponent />
      </HeaderComponent>
      <BarComponent />
      <ListComponent />
    </div>
  );
}

export { AppUI };
