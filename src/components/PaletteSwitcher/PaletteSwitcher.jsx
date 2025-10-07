
import { useEffect, useState } from 'react'
import styles from './PaletteSwitcher.module.css'
import { getInitialPalette, applyPalette } from '../../utils/theme'

const palettes = [
  { id:'nebula', label:'Nebula', dot:'#7c4dff' },
  { id:'aurora', label:'Aurora', dot:'#00e5ff' },
  { id:'noir',   label:'Noir',   dot:'#34d399' },
]

export default function PaletteSwitcher(){
  const [p, setP] = useState(getInitialPalette())
  useEffect(()=> { applyPalette(p) }, [p])
  return (
    <div className={styles.wrap} role="group" aria-label="Cambiar paleta de colores">
      {palettes.map(x => (
        <button key={x.id}
          className={`${styles.btn} ${p===x.id ? styles.active : ''}`}
          onClick={()=> setP(x.id)}
          aria-pressed={p===x.id}
          title={`Paleta ${x.label}`}>
          <span className={styles.dot} style={{background:x.dot}} aria-hidden="true" />
          <span className={styles.label}>{x.label}</span>
        </button>
      ))}
    </div>
  )
}
