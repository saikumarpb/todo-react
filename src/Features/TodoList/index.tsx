import React from "react";
import { TodoListProps } from "./types";
import "./styles.css";
import Button from "../../Components/Button";

function TodoList({
  list,
  handleCheckbox,
  handleRemovetask,
  handleEditTask,
}: TodoListProps) {
  return (
    <>
      {list.map(({ id, text }) => (
        <div className="todo-item" key={id}>
          <input type="checkbox" onClick={() => handleCheckbox(id)}></input>
          <div className="todo-text">{text}</div>
          <div className="todo-actions">
            <Button buttonText="Edit" onClick={() => handleEditTask(id)} />
            <Button buttonText="Delete" onClick={() => handleRemovetask(id)} />
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
