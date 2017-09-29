import React from 'react';
import ProTypes from 'prop-types'
import {
  Router,
  Route
} from 'dva/router';
import App from './routes/app';


const cached = {};

/*function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}*/
const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

function RouterConfig({
  history,
  app
}) {
  const routes = [{
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/IndexPage'))
          cb(null, {
            component: require('./routes/index/IndexPage')
          })
        }, 'dashboard')
      },
      childRoutes: [{
          path: 'user',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/user/index'))
            }, 'user')
          },
        }, {
          path: 'login',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/userLogin'))
              cb(null, require('./routes/Login/component/Login'))
            })
          }
        }, {
          path: 'componentlist',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/componentList'))
              cb(null, require('./routes//ComponentList/component/ComponentList'))
            })
          }
        }, {
          path: '*',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/NotFound/NotFound'))
            })
          }
        }


      ]
    },


  ]


  return (
    <Router history={history} routes={routes} />
  );
}

export default RouterConfig;