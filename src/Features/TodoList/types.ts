import { TodoItem } from "../AddTodoItem/types";

export interface TodoListProps {
  list: TodoItem[];
  handleRemovetask: (id: number) => void;
  handleCheckbox: (id: number) => void;
  handleEditTask: (id: number) => void;
}
