import { Notification } from '@arco-design/web-react';
import { RequestConfig } from "umi";
import { ResponseError } from 'umi-request';

export async function getInitialState(): Promise<API.InitialState> {
  return Promise.resolve({
    mode: 'dark',
    role: {
      isAdmin: true,
      isEditor: false,
    }
  });
}

// request 用于配置全局的网络请求，你可以在这里做拦截器，全局错误处理，鉴权的配置。
// https://pro.ant.design/zh-CN/config/runtime-api#request
const errorHandler = (error: ResponseError) => {
  // 错误原因
  Notification.error({
    title: '网络异常',
    content: '您的网络发生异常，无法连接服务器',
  });
  throw error;
};


// 请求前拦截：requestInterceptors
// https://pro.ant.design/zh-CN/docs/request
const authHeaderInterceptor = (url: string, options: RequestConfig) => {
  const token = localStorage.getItem('token');
  if (token !== null) {
    const authHeader = { Authorization: `Bearer ${token}`, QQ: 'daykalif' };
    return {
      url: `${url}`,
      options: { ...options, interceptors: true, headers: authHeader },
    }
  }
  return {
    url: `${url}`,
    options: { ...options, interceptors: true },
  };
};

// 响应后拦截：responseInterceptors 
// https://pro.ant.design/zh-CN/docs/request
const demoResponseInterceptors = (response: Response, options: RequestConfig) => {
  // response.headers.append('interceptors', 'yes yo');
  console.log(response.status);
  return response;
};

export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [demoResponseInterceptors],
}