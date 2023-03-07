import { request } from "umi";

export const doLogin = async (user: API.IUser) => {
  return await request('/api/users/login', { method: 'post', data: user });
}

export const doRegister = async (user) => {
  return await request('/api/user/register', { method: 'post', data: user });
}