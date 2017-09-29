import {
  routerRedux
} from 'dva/router'
import {
  queryMenu
} from '../services/example'
import tools from '../utils/tools'
import {
  parse
} from 'qs'
import _ from 'lodash';


export default {

  namespace: 'app',

  state: {
    username: '',
    dataMenu: null
  },

  subscriptions: {
    setup({
      dispatch,
      history
    }) { // eslint-disable-line
      dispatch({
        type: 'query'
      })

    },
  },

  effects: { * query({
      payload,
    }, {
      call,
      put
    }) {
      let path = window.location.pathname;
      let username = tools.getCookie('username');
      if (_.isEmpty(username) && path !== '/login') {
        yield put(routerRedux.push({
          pathname: '/login',
        }))
      } else if (path == '/login' && !_.isEmpty(username)) {
        routerRedux.push({
          pathname: `/`
        }, () => {})
      }
      const dataMenu = yield call(queryMenu, parse())
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
      return {...state,
        ...action.payload
      };
    },
  },

};