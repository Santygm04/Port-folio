
import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import { motion } from 'framer-motion'

const phrases = ['Full‑Stack Developer','React & UI/UX','Web Performance']

export default function Hero({id}){
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')

  // simple typing effect
  useEffect(()=>{
    let i = 0, t, p = phrases[index]
    function type(){
      setDisplay(p.slice(0, i++))
      if(i <= p.length) t = setTimeout(type, 60)
      else t = setTimeout(()=>{
        // pause then delete
        let j = p.length
        const del = () => {
          setDisplay(p.slice(0, j--))
          if(j>=0) t = setTimeout(del, 35)
          else{
            const next = (index+1)%phrases.length
            setIndex(next)
          }
        }
        t = setTimeout(del, 900)
      }, 800)
    }
    type()
    return ()=> clearTimeout(t)
  },[index])

  const sphereRef = useRef(null)
  useEffect(()=>{
    const onScroll = () => {
      const y = window.scrollY || 0
      const t = Math.min(40, y * 0.04)
      if(sphereRef.current){ sphereRef.current.style.transform = `translateY(${t}px)` }
    }
    onScroll(); window.addEventListener('scroll', onScroll, {passive:true})
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <section id={id} className={`section ${styles.hero}`} aria-label="Inicio">
      <div className="container">
        <motion.div
          initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.7}}
          className={styles.wrap}
        >
          <div className={styles.copy}>
            <p className="badge" aria-label="Ubicación">Tucumán, Argentina</p>
            <h1 className={styles.title}>Hola, soy <span className={styles.name}>Santiago</span></h1>
            <h2 className={styles.subtitle} aria-live="polite">{display}</h2>
            <p className="subtle">Diseño y desarrollo páginas webs, aplicaciones claras, rápidas y accesibles.</p>
            <div className={styles.cta}>
              <a href="#proyectos" className="btn secondary">Ver Proyectos</a>
              <a href="/cv-santiago.pdf" className="btn secondary" download>Descargar CV</a>
            </div>
            <div className={styles.socials}>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.76.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.08 1.84 2.83 1.3 3.52.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.5.12-3.13 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.63.24 2.83.12 3.13.77.84 1.24 1.9 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z"/></svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.6c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.69H9.34V9h3.41v1.56h.05c.47-.89 1.61-1.83 3.32-1.83 3.55 0 4.21 2.34 4.21 5.39v6.33ZM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13h3.55V9H3.56v11.44Z"/></svg>
              </a>
            </div>
          </div>
          <motion.div ref={sphereRef} className={styles.sphere} initial={{opacity:0, scale:.9}} whileInView={{opacity:1, scale:1}} transition={{duration:.8, delay:.15}} viewport={{ once:true }}>
            <div className={styles.glow}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
