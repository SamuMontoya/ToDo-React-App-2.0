import React from "react";
import { ErrorComponent } from "../ErrorComponent";
import "./FormComponent.css";

function FormComponent(props) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onCancel = () => {
    props.setOpenModal(false);
    props.setOnCreating(false);
    props.setOnEditing(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.setOpenModal(false);
    props.setOnCreating(false);
    props.setOnEditing(false);
    if (newTodoValue !== "") {
      props.addTodo(newTodoValue);
    } else if (!!props.onEditing) {
      props.editTodo();
    } else {
      console.log("Empty");
    }
  };
  const onChange = (event) => {
    const editableTodo = props.editableTodo;
    if (props.onCreating) {
      setNewTodoValue(event.target.value);
    } else {
      props.setEditableTodo((editableTodo) => ({
        ...editableTodo,
        text: event.target.value,
      }));
    }
  };

  const elementRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      elementRef.current.classList.add("open-popup");
    }, 0);
  }, []);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(event);
    }
  };

  return (
    <form onSubmit={onSubmit} className="popup" ref={elementRef}>
      <label>
        {!!props.onCreating && "Create a new "}
        {!!props.onEditing && "Edit an existing "}
        ToDo
      </label>
      <textarea
        value={props.onEditing ? props.editableTodo.text : newTodoValue}
        onChange={onChange}
        placeholder="Write your ToDo here..."
        onKeyDown={onKeyDown}
        autoFocus
      />
      <div className="buttons-area">
        <button type="button" onClick={onCancel} className="btn">
          Cancel
        </button>
        <button type="submit" className="btn" style={{ background: "#309398" }}>
          OK
        </button>
      </div>
    </form>
  );
}

export { FormComponent };
