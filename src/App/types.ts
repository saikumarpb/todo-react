import { TodoItem } from "./../Features/AddTodoItem/types";

export interface GetTodoListApiResponse {
  pending: TodoItem[];
  completed: TodoItem[];
}

export type TaskStatus = "PENDING" | "COMPLETED";

export interface PostTaskRequestBody {
  id: number;
  text: string;
  isPending: boolean;
}
