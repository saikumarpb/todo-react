import React from "react";
import { TodoListProps } from "./types";
import "./styles.css";
import Button from "../../Components/Button";
import EditIcon from "jsx:../../assets/icons/EditIcon.svg";
import DeleteIcon from "jsx:../../assets/icons/DeleteIcon.svg";

function TodoList({
  list,
  handleCheckbox,
  handleRemovetask,
  handleEditTask,
}: TodoListProps) {
  return (
    <>
      {list.map((task) => (
        <div className="todo-item" key={task.id}>
          <input type="checkbox" onClick={() => handleCheckbox(task)}></input>
          <div className="todo-text">{task.text}</div>
          <div className="todo-actions">
            <Button
              buttonText={<EditIcon height="16px" width="16px" />}
              onClick={() => handleEditTask(task)}
            />
            <Button
              buttonText={<DeleteIcon height="16px" width="16px" />}
              onClick={() => handleRemovetask(task.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
