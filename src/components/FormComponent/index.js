import React from "react";
import { TodoContext } from "../../TodoContext";
import "./FormComponent.css";

function FormComponent() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    if (newTodoValue !== "") {
      addTodo(newTodoValue);
    } else {
      console.log("Empty");
    }
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const elementRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      elementRef.current.classList.add("open-popup");
    }, 0);
  }, []);

  const onKeyDown = (event) => {
    if(event.key === 'Enter') {
      onSubmit(event)
    }
  }

  return (
    <form onSubmit={onSubmit} className="popup" ref={elementRef}>
      <label>Create a new ToDo</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Write your ToDo here..."
        onKeyDown={onKeyDown}
        autoFocus
      />
      <div className="buttons-area">
        <button type="button" onClick={onCancel} className="btn">
          Cancel
        </button>
        <button  type="submit" className="btn" style={{ background: "#309398" }}>
          OK
        </button>
      </div>
    </form>
  );
}

export { FormComponent };
