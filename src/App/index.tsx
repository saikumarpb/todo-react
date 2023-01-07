import React, { useState } from "react";
import AddTodoItem from "../Features/AddTodoItem";
import { TodoItem } from "../Features/AddTodoItem/types";
import CompletedList from "../Features/CompletedList";
import EditTodoItem from "../Features/EditTodoItem";
import Header from "../Features/Header";
import TodoList from "../Features/TodoList";
import "./styles.css";

function App() {
  const [task, setTask] = useState("");
  const [editTask, setEditTask] = useState<TodoItem | null>();
  const [isEditing, setIsEditing] = useState(false);
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [completedTaskList, setCompletedTaskList] = useState<TodoItem[]>([]);

  const sendALert = () => alert("Please enter task description");

  const handleAddTodoInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => setTask(e.target.value);

  /**
   * Adds a new task
   */
  const handleAddTask = () => {
    // Check if the task description is empty
    if (task.length == 0) sendALert();
    else
      setTodoList((prevList) => {
        return [...prevList, { id: +new Date(), text: task }];
      });
    // Clear the text in input after adding task.
    setTask("");
  };

  /**
   * Deletes a pending/Todo task
   */
  const handleRemoveTask = (taskId: number) => {
    setTodoList((prevState) => {
      return prevState.filter((task) => task.id !== taskId);
    });
  };

  /**
   * Moves a task from pending/Todo section to completed section
   */
  const handleCompleteTask = (taskId: number) => {
    let completedTask: TodoItem;

    setTodoList((prevState) => {
      return prevState.reduce((result: TodoItem[], task) => {
        if (task.id !== taskId) {
          result.push(task);
        } else {
          completedTask = task;
        }
        return result;
      }, []);
    });

    setCompletedTaskList((prevState) => {
      return [...prevState, completedTask];
    });
  };

  const handleEditTask = (taskId: number) => {
    setIsEditing(true);
    const editTask = todoList.filter((task) => task.id === taskId);
    setTask(editTask[0].text);
    setEditTask(editTask[0]);
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTask((prevState) => {
      if (prevState) return { ...prevState, text: e.target.value };
    });
  };

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
      setTodoList((prevState) => {
        return prevState.reduce((result: TodoItem[], task) => {
          if (editTask.id == task.id) {
            result.push({ ...task, text: editTask.text });
          } else {
            result.push(task);
          }
          return result;
        }, []);
      });
      // Reused the handleCancelEdit to reset states
      handleCancelEdit();
    } else {
      sendALert();
    }
  };

  return (
    <div className="parent">
      <div className="todo-app">
        <Header />
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
        <CompletedList taskList={completedTaskList} />
      </div>
    </div>
  );
}

export default App;
