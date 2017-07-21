import styles from './Model.less'

class Model extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }

  render(){
    return(
      <div>
        <div className={styles.modelbg}>
          123
        </div>
        <div className = {styles.modelWrap}>
          <div className = {styles.content}>

          </div>
        </div>
      </div>

    )
  }
}

export default Model
