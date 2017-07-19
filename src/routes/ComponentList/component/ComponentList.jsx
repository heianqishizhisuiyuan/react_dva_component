import React from 'react'
import { connect} from 'dva'
import {Icon} from 'antd'
import{ Button, Input, Search } from '../../../components/Sunshine/index'
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
  getSelect =(value,index)=> {
    debugger
  }
  render(){
    let options = [
      {
        index:1,
        value: '第一个'
      },
      {
        index:2,
        value: '第二个'
      },
      {
        index:3,
        value: '第三个'
      },
      {
        index:4,
        value: '第四个'
      },
      {
        index:5,
        value: '第五个'
      },

    ]
    let style={
      width: '200px'
    }
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
        <section className={styles.part}>
          <label className={styles.partLabel}> 单选框</label>
          <div className={styles.item}>
           <Search
             options={ options }
             getSelect = {this.getSelect}
             style = {style}
           />
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
