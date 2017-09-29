import React from 'react'
import PropTypes from 'prop-types'
import {
  connect
} from 'dva'
import tools from '../utils/tools'
import _isEmprty from 'lodash/isEmpty'
import classNames from 'classnames'
import {
  Header,
  Aside
} from '../components/Layout/index'
import {
  Helmet
} from 'react-helmet'
import styles from './app.less'
import Nprogress from 'nprogress'

let lastHerf
const App = ({
  children,
  location,
  dipatch,
  app,
  loading
}) => {
  const href = window.location.href
  const username = tools.getCookie('username')
  if (lastHerf !== href) {
    Nprogress.start()
    if (!loading.global) {
      Nprogress.done()
      lastHerf = href
    }
  }

  if (window.location.pathname == '/login') {
    return (
      <div style={{height:'100%'}}>
       {children}
      </div>
    )
  } else {
    return (
      <div style={{height:'100%', paddingTop: '10px',paddingLeft:'50px',paddingRight:'50px',margin: '0'}}>
      <div className={styles.wrap}>
        <Header />
      </div>
      <div className={classNames({[styles.main]:true,[styles.clearfix]:true})}>
          <div className={styles.aside}>
            <Aside dataSource={app.dataMenu? app.dataMenu.data.menu : null} />
          </div>
          <div className={styles.content}>
        { children }
          </div>

      </div>
    </div>
    )
  }



}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({
  app,
  loading
}) => ({
  app,
  loading
}))(App)