import { request } from "umi";

export const doLogin = async (user: API.IUser) => {
  return await request('/api/users/login', { method: 'post', data: user });
}