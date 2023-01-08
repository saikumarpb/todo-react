import React, { useEffect, useState } from "react";
import AddTodoItem from "../Features/AddTodoItem";
import { TodoItem } from "../Features/AddTodoItem/types";
import CompletedList from "../Features/CompletedList";
import EditTodoItem from "../Features/EditTodoItem";
import Header from "../Features/Header";
import TodoList from "../Features/TodoList";
import { apiErrorMessage, sendEmptyInputMessage } from "../Utils/constants";
import { deleteTask, getTaskList, postTask } from "./service";
import "./styles.css";
import { TaskStatus } from "./types";

function App() {
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState<TodoItem | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [completedTaskList, setCompletedTaskList] = useState<TodoItem[]>([]);

  useEffect(() => {
    getTaskList()
      .then((response) => {
        setTodoList(response.data.pending);
        setCompletedTaskList(response.data.completed);
      })
      .catch(() => {
        apiErrorMessage();
      });
  }, []);

  /**
   * Handler for input change to Add task
   * @param e input change event
   */
  const handleAddTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTask(e.target.value);

  /**
   * Adds a new task to Todo/pending section
   */
  const handleAddTask = () => {
    // Check if the task description is empty
    if (task.length == 0) sendEmptyInputMessage();
    else {
      const newTask: TodoItem = { id: +new Date(), text: task };
      postTask(newTask)
        .then(() => {
          setTodoList((prevList) => {
            return [...prevList, newTask];
          });
          // Clear the text in input after adding task.
          setTask("");
        })
        .catch(() => apiErrorMessage());
    }
  };

  /**
   * Deletes a pending/Todo task
   * @param taskId id of the task to be removed
   */
  const handleRemoveTask = (
    taskId: number,
    taskStatus: TaskStatus = "PENDING"
  ) => {
    deleteTask(taskId)
      .then(() => {
        if (taskStatus === "PENDING") {
          setTodoList((prevState) => {
            return prevState.filter((task) => task.id !== taskId);
          });
        } else {
          setCompletedTaskList((prevState) => {
            return prevState.filter((task) => task.id !== taskId);
          });
        }
      })
      .catch(() => apiErrorMessage);
  };

  /**
   * Moves a task from pending/Todo section to completed section
   * @param completedTask task to be marked as completed
   */
  const handleCompleteTask = (completedTask: TodoItem) => {
    postTask(completedTask, "COMPLETED")
      .then(() => {
        setTodoList((prevState) => {
          return prevState.filter((xs) => xs.id !== completedTask.id);
        });
        setCompletedTaskList((prevState) => {
          return [...prevState, completedTask];
        });
      })
      .catch(() => apiErrorMessage());
  };

  /**
   *
   * @param editTask task selected for editing
   */
  const handleEditTask = (editTask: TodoItem) => {
    setIsEditing(true);
    setTask(editTask.text);
    setEditTask(editTask);
  };

  /**
   * Handler for input changes in edit mode
   * @param e input change event
   */
  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTask((prevState) => {
      if (prevState) return { ...prevState, text: e.target.value };
    });
  };

  /**
   * Handler for cancel button in edit mode.
   * reset's states from edit mode to normal mode
   */
  const handleCancelEdit = () => {
    setIsEditing(false);
    setTask("");
    setEditTask(null);
  };

  /**
   * Updates a pending/Todo task with new text
   */
  const handleUpdatetask = () => {
    if (editTask && editTask.text.length > 0) {
      postTask(editTask)
        .then(() => {
          setTodoList((prevState) => {
            const fitertedList = prevState.filter(
              (xs) => xs.id !== editTask.id
            );
            return [...fitertedList, editTask];
          });
          // Reused the handleCancelEdit to reset states from edit mode to normal mode
          handleCancelEdit();
        })
        .catch(() => apiErrorMessage());
    } else {
      sendEmptyInputMessage();
    }
  };

  return (
    <div className="parent">
      <div className="todo-app">
        <Header />
        {/*Conditionally render Add Todo section or Edit Todo section*/}
        {!isEditing && (
          <AddTodoItem
            taskname={task}
            handleAddtask={handleAddTask}
            handleChange={handleAddTodoInputChange}
          />
        )}
        {isEditing && editTask && (
          <EditTodoItem
            task={editTask}
            handleUpdatetask={handleUpdatetask}
            handleChange={handleEditInputChange}
            handleCancelEdit={handleCancelEdit}
          />
        )}
        <TodoList
          list={todoList}
          handleRemovetask={handleRemoveTask}
          handleCheckbox={handleCompleteTask}
          handleEditTask={handleEditTask}
        />
        <CompletedList
          taskList={completedTaskList}
          handleDeleteTask={handleRemoveTask}
        />
      </div>
    </div>
  );
}

export default App;
