const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export const apiRequestUrls = {
  getTodoList: `${BACKEND_URL}/todolist`,
  deleteTask: (id: number) => `${BACKEND_URL}/todolist/delete/${id}`,
  postTask: `${BACKEND_URL}/todolist/post`,
};

export const apiErrorMessage = () => alert("Api request failed");

export const sendEmptyInputMessage = () =>
  alert("Please enter task description");
