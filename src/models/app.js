import {queryMenu} from '../services/example'
import  tools from '../utils/tools'
import {parse }  from 'qs'
import _isEmprty from 'lodash/isEmpty'


export default {

  namespace: 'app',

  state: {
    username:'',
    dataMenu: null
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      dispatch({ type: 'query' })

    },
  },

  effects: {
    *query({payload,},{call, put}){
      let path = window.location.pathname;
      let username = tools.getCookie('username')
      if(_isEmprty(username) && path!=='/login'){
        window.location.href = `${location.origin}/login`
      }else if(path=='/login'&&!_isEmprty(username) ){
        window.location.href = `${location.origin}/`
      }
      const dataMenu = yield call(queryMenu,parse())
      yield put({
        type: 'querySuccess',
        payload: {
          username: username,
          dataMenu: dataMenu
        },
      })

    },

  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
