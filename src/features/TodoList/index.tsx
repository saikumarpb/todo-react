import React from "react";
import { TodoListProps } from "./types";
import "./styles.css";

function TodoList({ list, handleCheckbox, handleRemovetask }: TodoListProps) {
  return (
    <>
      {list.map(({ id, text }) => (
        <div className="todo-item" key={id}>
          <input type="checkbox" onClick={() => handleCheckbox(id)}></input>
          {text}
          <div className="todo-actions">
            <button className="edit-todo">Edit</button>
            <button className="delete" onClick={() => handleRemovetask(id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoList;
