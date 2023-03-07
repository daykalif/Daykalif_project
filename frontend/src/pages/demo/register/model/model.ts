import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface IndexModelState {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IndexModelType {
  namespace: 'register';
  state: IndexModelState;
  reducers: {
    registerReducer: Reducer;
  };
  effects: {};
  subscriptions: {};
}

const IndexModel: IndexModelType = {
  namespace: 'register',
  state: {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },

  // 同步函数
  reducers: {
    registerReducer(state, action) {
      console.log('action====>', action);
      return action.payload;
    },
  },

  // 异步函数
  effects: {

  },

  // 订阅
  subscriptions: {},
};

export default IndexModel;