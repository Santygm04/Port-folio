
import styles from './About.module.css'
import { motion } from 'framer-motion'

export default function About({id}){
  return (
    <section id={id} className="section" aria-label="Sobre mí">
      <div className="container">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5}}>Sobre mí</motion.h2>
        <div className={styles.grid}>
          <motion.div className={styles.photo} initial={{opacity:0, scale:.97}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:.6}}>
            <div className={styles.ring}><img src="/src/assets/profile.svg" alt="Foto de perfil de Santiago" loading="lazy" /></div>
          </motion.div>
          <motion.div className={styles.text} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.6, delay:.1}}>
            <p className="subtle">
              Soy un desarrollador full‑stack apasionado por crear experiencias web excepcionales. Me especializo en transformar ideas en interfaces intuitivas y funcionales, siempre enfocándome en la calidad del código y la experiencia del usuario. Mi objetivo es construir productos digitales que no solo se vean bien, sino que también resuelvan problemas reales de manera eficiente.
            </p>
            <ul className={styles.info}>
              <li><span>Ubicación</span><strong>Tucumán, Argentina</strong></li>
              <li><span>Disponibilidad</span><strong>Freelance</strong></li>
              <li><span>Email</span><strong>santiagogilmina2@gmail.com</strong> <button className={styles.copy} onClick={()=>navigator.clipboard.writeText('santiagogilmina2@gmail.com')}>Copiar</button></li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
