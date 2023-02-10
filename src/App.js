import React from "react";
import { TitleComponent } from './components/TitleComponent';
import { ProgressComponent } from "./components/ProgressComponent";
import { BarComponent } from "./components/BarComponent";

function App(props) {
  return(
    <React.Fragment>
      <TitleComponent />
      <ProgressComponent />
      <BarComponent />
    </React.Fragment>
  );
};

export default App;
