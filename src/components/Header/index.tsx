
import styles from './header.module.scss'

export default function Header() {
  return(
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
        <a href="/"><strong> <span>	&lt;/&gt;</span> spacetraveling <span>.</span> </strong></a>
        </div>
      </div>
    </header>
  )
}
