const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:1234";

export const apiRequestUrls = {
  getTodoList: `${BACKEND_URL}/todolist`,
  deleteTask: (id: number) => `http://localhost:8000/todolist/delete/${id}`,
  postTask: "http://localhost:8000/todolist/post",
};

export const apiErrorMessage = () => alert("Api request failed");

export const sendEmptyInputMessage = () =>
  alert("Please enter task description");
