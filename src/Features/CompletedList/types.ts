import { TaskStatus } from "../../App/types";
import { TodoItem } from "../AddTodoItem/types";

export interface CompletedListProps {
  taskList: TodoItem[];
  handleDeleteTask: (taskId: number, taskStatus: TaskStatus) => void;
}
