import React from 'react'
import { connect} from 'dva'
import {Icon} from 'antd'
import{ Button, Input } from '../../../components/Sunshine/index'
import styles from './ComponentList.less';

const nameSpace = 'componentList'
class ComponentList extends React.Component {
  constructor () {
    super()
    this.state={
    }
  }
  onChange(e) {
    console.log(e)
  }

  render(){

    return(
      <div>
        <section className={styles.part}>
          <label className={styles.partLabel}> 按钮</label>
          <div className={styles.item}>
            <Button> 按钮</Button>
          </div>
        </section>
        <section className={styles.part}>
          <label className={styles.partLabel}> 输入框</label>
          <div className={styles.item}>
            <Input
              onChange={this.onChange.bind(this)}
              preIcon = {<Icon type = 'user'/>}
            />
          </div>
          <div className={styles.item}>
            <Input />
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{loading: state.loading.global}
}

export default connect (mapStateToProps)(ComponentList)
