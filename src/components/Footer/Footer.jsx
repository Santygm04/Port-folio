
import styles from './Footer.module.css'

export default function Footer(){
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.wrap}>
          <span>© {new Date().getFullYear()} Santiago Gil Mina</span>
          <a href="#inicio" className={styles.top}>Volver arriba ↑</a>
        </div>
      </div>
    </footer>
  )
}
