import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IndexModelType {
  namespace: 'register';
  state: {
    userInfo: IndexModelState,
    errMsg: string[],
  };
  reducers: {
    registerReducer: Reducer;
    setErrorMsg: Reducer;
  };
  effects: {};
  subscriptions: {};
}

const IndexModel: IndexModelType = {
  namespace: 'register',
  state: {
    userInfo: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    errMsg: [],
  },

  // 同步函数
  reducers: {
    registerReducer(state, action) {
      return {
        ...state,
        userInfo: action.payload,
      };
    },
    setErrorMsg(state, action) {
      return {
        ...state,
        errMsg: action.payload,
      };
    },
  },

  // 异步函数
  effects: {

  },

  // 订阅
  subscriptions: {},
};

export default IndexModel;