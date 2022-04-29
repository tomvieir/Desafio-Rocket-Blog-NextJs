import Link from 'next/link'
import styles from './header.module.scss'

export default function Header() {
  return(
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
        <strong> <span>	&lt;/&gt;</span> spacetraveling <span>.</span> </strong>
        </div>
      </div>
    </header>
  )
}
