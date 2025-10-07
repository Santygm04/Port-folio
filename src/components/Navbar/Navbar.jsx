
import styles from './Navbar.module.css'

const links = [
  { id:'inicio', label:'Inicio' },
  { id:'sobre-mi', label:'Sobre mí' },
  { id:'habilidades', label:'Habilidades' },
  { id:'proyectos', label:'Proyectos' },
  { id:'contacto', label:'Contacto' },
]

import ThemeToggle from '../ThemeToggle/ThemeToggle'

export default function Navbar({active}){
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrap}`}>
        <a href="#inicio" className={styles.brand} aria-label="Santiago - Inicio">
          <span className={styles.logoGlow}></span>
          <span className={styles.brandText}>Santiago</span>
          <span className="badge" style={{marginLeft:8}}>Full‑Stack</span>
        </a>
        <nav className={styles.nav} aria-label="Secciones del sitio">
          {links.map(l=> (
            <a key={l.id} href={`#${l.id}`} className={`${styles.link} ${active===l.id ? styles.active : ''}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
