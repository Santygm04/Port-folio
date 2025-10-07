
import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'
import { getInitialTheme, applyTheme } from '../../utils/theme'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(getInitialTheme())
  useEffect(()=> { applyTheme(theme) }, [theme])
  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  return (
    <button className={styles.toggle} onClick={toggle} aria-label="Cambiar tema claro/oscuro">
      <span className={styles.icon} aria-hidden="true">{theme === 'dark' ? '🌙' : '☀️'}</span>
      <span className={styles.label}>{theme === 'dark' ? 'Oscuro' : 'Claro'}</span>
    </button>
  )
}
