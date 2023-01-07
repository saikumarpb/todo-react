import React from "react";
import { AddTodoItemProps } from "./types";
import "./styles.css";

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
      <button className="add-todo-button" onClick={handleAddtask}>
        Add
      </button>
    </div>
  );
}

export default AddTodoItem;
