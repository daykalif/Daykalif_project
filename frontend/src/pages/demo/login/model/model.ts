import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import * as actionTypes from '../actionTypes';
import { isEmpty } from 'lodash';

export interface IndexModelType {
  namespace: 'login';
  state: {
    isAuth: boolean,
    user: object,
    errMsg: string[],
  };
  reducers: {
    loginReducer: Reducer;
    logoutReducer: Reducer;
    setErrorMsg: Reducer;
  };
  effects: {};
  subscriptions: {};
}

const IndexModel: IndexModelType = {
  namespace: 'login',
  state: {
    isAuth: false,
    user: {},
    errMsg: [],
  },

  // 同步函数
  reducers: {
    loginReducer(state, action) {
      return {
        isAuth: !isEmpty(action.payload),
        user: action.payload,
      }
    },
    logoutReducer(state, action) {
      return {
        isAuth: !isEmpty(action.payload),
        user: action.payload,
      }
    },
    setErrorMsg(state, action) {
      return {
        ...state,
        errMsg: action.payload,
      };
    },
  },

  // 异步函数
  effects: {},

  // 订阅
  subscriptions: {},
};

export default IndexModel;