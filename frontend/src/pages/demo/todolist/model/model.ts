// 这几个都是ts的数据类型
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getTodoListData } from './services';

export interface IndexModelState {
  name: string;
  data: string[];
}

export interface IndexModelType {
  // 如果ts定义不会变的字符串，可以写死
  namespace: 'todilist';
  state: IndexModelState;
  effects: {
    loadTodoList: Effect;
  };
  reducers: {
    load: Reducer<IndexModelState>;
    add: Reducer<IndexModelState>;
    remove: Reducer,  // 写成Reducer<IndexModelState>也可以
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  // 命名空间
  namespace: 'todilist',

  // store的数据
  state: {
    name: '',
    data: [],
  },

  // 同步函数
  reducers: {
    load(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    add(state, action) {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    remove(state, action) {
      return {
        ...state,
        data: state.data.filter((item: string) => item !== action.payload),
      };
    },
  },

  // 异步函数
  effects: {
    *loadTodoList({ payload }, { call, put }) { // generator函数   payload：用作参数；call：用于数据请求；put：相当于dispatch
      const res = yield call(getTodoListData);  // 从services中方法获取数据
      console.log(res);
      yield put({
        type: 'load', // 调用reducers中的load
        payload: res.todo_list,
      })
    },
  },

  // 订阅
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        console.log('每次路由变化都可以拿到pathname', pathname)

        // 如果打开的pathname是/demo/todolist，则调用异步函数effects中的loadTodoList
        if (pathname === '/demo/todolist') {
          dispatch({
            type: 'loadTodoList',
          });
        }
      });
    },
  },
};

export default IndexModel;