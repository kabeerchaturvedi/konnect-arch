import React, { useRef } from "react";
import { Button } from "react-bootstrap";
const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "GREEN";
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={item.id} className="card">
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <Button onClick={() => changeFocus()} variant="success">
          HIGHLIGHT
        </Button>

        {item.completed === false && (
          <Button variant="primary" onClick={() => completeTodo(item.id)}>
            {" "}
            Mark as Complete
          </Button>
        )}
        <Button variant="danger" onClick={() => removeTodo(item.id)}>
          Delete
        </Button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;
