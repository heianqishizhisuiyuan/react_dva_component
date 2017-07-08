import { routerRedux } from 'dva/router'

export default {

  namespace: 'indexPage',

  state: {},

  subscriptions: {

  },

  effects: {
    *link({payload}, {call, put}){
      yield put(routerRedux.push('/user'))
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
