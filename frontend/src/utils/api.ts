import http from './http';

export const getTodoListDataApi = (params?: object) => http.get("/todo_list", params);