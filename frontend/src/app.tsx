import { Notification } from '@arco-design/web-react';
import { RequestConfig, RunTimeLayoutConfig } from "umi";
import { ResponseError } from 'umi-request';
import PageLoading from './components/PageLoading';
import RightContentRender from './layouts/rightContentRender';

export async function getInitialState(): Promise<API.InitialState> {
  return Promise.resolve({
    mode: 'dark',
    role: {
      isAdmin: true,
      isEditor: false,
    }
  });
  // const initialState = { user: {} };
  // try {
  //   const result = await queryLoginUser({ userId: '' });
  //   if (result?.success && result?.data) {
  //     const { data } = result ?? {};
  //     initialState.user = {
  //       ...data,
  //     };
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
  // return initialState;
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
  const passURL = ['/api/user/login', '/api/user/register'];
  if (passURL.includes(url)) {
    return {
      url: `${url}`,
      options: { ...options, interceptors: true },
    };
  }

  const token = localStorage.getItem('DAYKALIF-TOKEN');
  if (token !== null) {
    const authHeader = { Authorization: `Bearer ${token}`, QQ: 'daykalif' };
    return {
      url: `${url}`,
      options: { ...options, interceptors: true, headers: authHeader },
    }
  } else {
    delete options?.headers;
  }
  return {
    url: `${url}`,
    options: { ...options, interceptors: true },
  };
};

// 响应后拦截：responseInterceptors 
// https://pro.ant.design/zh-CN/docs/request
const demoResponseInterceptors = (response: Response, options: RequestConfig) => {
  const { status, msg } = response;
  if (status === 501 && msg === 'TOKEN ERROR') {
    window.location.href = '/login';
  };
  return response;
};

export const request: RequestConfig = {
  errorHandler,
  requestInterceptors: [authHeaderInterceptor],
  responseInterceptors: [demoResponseInterceptors],
}


// 从服务端请求菜单
const LOGO_URL = 'https://img0.baidu.com/it/u=332516632,1456617461&fm=253&fmt=auto&app=120&f=JPEG?w=801&h=500';
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    title: 'Daykalif’s Web',
    logo: LOGO_URL,
    local: 'zh-CN',
    collapse: true,
    layout: 'mix',
    rightContentRender: (props) => <RightContentRender {...props} />,
    navTheme: 'light', // 左侧导航的主题为 浅色 主题
    fixSiderbar: true,
    fixHeader: true,
    disableMobile: true,
    contentStyle: { padding: 12 },
    disableContentMargin: true,
    actionsRender: false,
    avatarProps: false,
    menu: {
      locale: false,
    },
    token: {
      header: {
        heightLayoutHeader: 46,
      }
    }
  };
};


/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};