import { TodoItem } from "../AddTodoItem/types";

export interface EditTodoItemProps {
  task: TodoItem;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdatetask: () => void;
  handleCancelEdit: () => void;
}
