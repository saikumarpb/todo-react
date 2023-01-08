import axios, { AxiosResponse } from "axios";
import { TodoItem } from "../Features/AddTodoItem/types";
import { apiRequestUrls } from "../Utils/constants";
import {
  GetTodoListApiResponse,
  PostTaskRequestBody,
  TaskStatus,
} from "./types";

/**
 * @returns Promise which represents eventual completion/rejection of get todo list API
 */
export async function getTaskList() {
  return await axios.get<GetTodoListApiResponse>(apiRequestUrls.getTodoList);
}

/**
 * @returns Promise which represents eventual completion/rejection of delete task API
 */
export async function deleteTask(id: number) {
  return await axios.delete<null>(apiRequestUrls.deleteTask(id));
}

/**
 * @returns Promise which represents eventual completion/rejection of post task API
 */
export async function postTask(task: TodoItem, status: TaskStatus = "PENDING") {
  return await axios.post<
    null,
    AxiosResponse<null, PostTaskRequestBody>,
    PostTaskRequestBody
  >(apiRequestUrls.postTask, {
    id: task.id,
    text: task.text,
    isPending: status === "PENDING",
  });
}
