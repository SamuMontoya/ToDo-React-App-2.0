import React from "react";
import ReactDOM from "react-dom";
import './ModalComponent.css'

function ModalComponent({ children }) {
  return ReactDOM.createPortal(
    <div className="background">{children}</div>,
    document.getElementById('modal')
  );
}

export { ModalComponent };
