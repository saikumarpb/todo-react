import React from "react";
import Button from "../../Components/Button";
import { EditTodoItemProps } from "./types";

function EditTodoItem({
  task,
  handleUpdatetask,
  handleCancelEdit,
  handleChange,
}: EditTodoItemProps) {
  return (
    <div className="add-todo-section">
      <input
        className="input"
        type="text"
        onChange={(event) => handleChange(event)}
        value={task.text}
      />
      <Button buttonText="Update" onClick={handleUpdatetask} />
      <Button buttonText="Cancel" onClick={handleCancelEdit} />
    </div>
  );
}

export default EditTodoItem;
