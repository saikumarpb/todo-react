import React, { useState } from "react";
import AddTodoItem from "../features/AddTodoItem";
import { TodoItem } from "../features/AddTodoItem/types";
import CompletedList from "../features/CompletedList";
import Header from "../features/Header";
import TodoList from "../features/TodoList";
import "./styles.css";
// import { ReactComponent as EditIcon } from "../assets/icons/edit-pencil-icon.svg";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [completedTaskList, setCompletedTaskList] = useState<TodoItem[]>([]);

  /**
   * sets the state of the task.
   * @param e input change event
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setTask(e.target.value);

  /**
   * function to add task to the list
   */
  const handleAddTask = () => {
    // Check if the task description is empty
    if (task.length == 0) alert("Please enter task description");
    else
      setTodoList((prevList) => {
        return [...prevList, { id: +new Date(), text: task }];
      });
    // Clear the text in input after adding task.
    setTask("");
  };

  const handleRemoveTask = (taskId: number) => {
    setTodoList((prevState) => {
      return prevState.filter((task) => task.id !== taskId);
    });
  };

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

  return (
    <div className="parent">
      <div className="todo-app">
        <Header />
        <AddTodoItem
          taskname={task}
          handleAddtask={handleAddTask}
          handleChange={handleInputChange}
        />
        <TodoList
          list={todoList}
          handleRemovetask={handleRemoveTask}
          handleCheckbox={handleCompleteTask}
        />
        <CompletedList taskList={completedTaskList} />
      </div>
    </div>
  );
}

export default App;
