import { TodoItem } from "./../AddTodoItem/types";

export interface TodoListProps {
  list: TodoItem[];
  handleRemovetask: (id: number) => void;
  handleCheckbox: (completedTask: TodoItem) => void;
  handleEditTask: (editTask: TodoItem) => void;
}
