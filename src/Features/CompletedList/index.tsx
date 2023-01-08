import React from "react";
import Button from "../../Components/Button";
import "./styles.css";
import { CompletedListProps } from "./types";
import DeleteIcon from "jsx:../../assets/icons/DeleteIcon.svg";


function CompletedList({ handleDeleteTask, taskList }: CompletedListProps) {
  return (
    <>
      {taskList.length > 0 && (
        <div className="completed-section">
          <h3>Completed</h3>
          <div className="completed-items-list">
            {taskList.map(({ id, text }) => (
              <div className="completed-item" key={id}>
                <div className="completed-item-text"> {text} </div>
                <Button
                  buttonText={<DeleteIcon height="16px" width="16px" />}
                  onClick={() => handleDeleteTask(id, "COMPLETED")}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CompletedList;
