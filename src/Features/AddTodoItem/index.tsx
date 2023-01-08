import React from "react";
import { AddTodoItemProps } from "./types";
import "./styles.css";
import Button from "../../Components/Button";

function AddTodoItem({
  taskname,
  handleAddtask,
  handleChange,
}: AddTodoItemProps) {
  return (
    <div className="add-todo-section">
      <input
        className="input"
        placeholder="Todo item..."
        type="text"
        onChange={(event) => handleChange(event)}
        value={taskname}
      />
      <Button buttonText="Add" onClick={handleAddtask} />
    </div>
  );
}

export default AddTodoItem;
