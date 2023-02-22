import React from "react";
import ReactDOM from "react-dom";
import './ModalComponent.css'

function ModalComponent(props) {
  return ReactDOM.createPortal(
    <div className="background">
      {!!props.dataState.loading && props.onLoading()}
      {!!props.onCreating && props.onForm()}
    </div>,
    document.getElementById('modal')
  );
}

export { ModalComponent };
