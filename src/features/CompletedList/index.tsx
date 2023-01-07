import React from "react";
import "./styles.css";
import { CompletedListProps } from "./types";

function CompletedList({ taskList }: CompletedListProps) {
  return (
    <>
      {taskList.length > 0 && (
        <div className="completed-section">
          <h3>Completed</h3>
          <div className="completed-items-list">
            {taskList.map(({ id, text }) => (
              <div className="completed-item" key={id}>
                {text}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CompletedList;
