import React, { useContext } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { ProgressComponent } from "../components/ProgressComponent";
import { BarComponent } from "../components/BarComponent";
import { ListComponent } from "../components/ListComponent";
import { ModalComponent } from "../components/ModalComponent";
import "./App.css";
import { TodoContext } from "../TodoContext";
import { FormComponent } from "../components/FormComponent";

function AppUI() {
  const { openModal } = useContext(TodoContext);
  return (
    <div className="app">
      <HeaderComponent>
        <ProgressComponent />
      </HeaderComponent>
      <BarComponent />
      <ListComponent />
      {!!openModal && (
        <ModalComponent>
          <FormComponent />
        </ModalComponent>
      )}
    </div>
  );
}

export { AppUI };
