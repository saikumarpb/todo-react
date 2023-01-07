export interface AddTodoItemProps {
  taskname: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddtask: () => void;
}

export interface TodoItem {
  id: number;
  text: string;
}
