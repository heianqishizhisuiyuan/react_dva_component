
import styles from './Header.less'

function Header() {
  return(
    <div>
      <header className={styles.header}>
        <div className ={styles.logo}>
          <img src={require('../../../assets/sign.png')}/>
        </div>
        <div className={styles.search}>
          <input type="text"/>
        </div>
        <div className={styles.muneList}>
          <span>首页</span>
        </div>
      </header>
    </div>
  )
}

export default Header
