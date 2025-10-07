
import styles from './Skills.module.css'
import { motion } from 'framer-motion'

const skills = [
  { name:'HTML', level:100, label:'Avanzado', note:'Estructura semántica y accesible' },
  { name:'CSS', level:90, label:'Avanzado', note:'Diseño responsive y animaciones' },
  { name:'JavaScript', level:60, label:'Intermedio', note:'ES6+, DOM y APIs modernas' },
  { name:'React', level:45, label:'Básico', note:'Componentes y hooks' },
  { name:'Bootstrap', level:45, label:'Básico', note:'Framework CSS responsive' },
  { name:'SQL', level:30, label:'Básico', note:'Consultas y bases de datos' },
  { name:'MongoDB', level:15, label:'Aprendiendo', note:'' },
  { name:'Node.js', level:10, label:'Aprendiendo', note:'' },
]

export default function Skills({id}){
  return (
    <section id={id} className="section" aria-label="Habilidades">
      <div className="container">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5}}>Habilidades</motion.h2>
        <div className={styles.grid}>
          {skills.map((s,i)=> (
            <motion.div key={s.name} className={styles.card}
              initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.45, delay:i*0.04}}>
              <div className={styles.head}>
                <strong>{s.name}</strong>
                <span className="subtle">{s.label}</span>
              </div>
              <div className={styles.bar} role="progressbar" aria-valuenow={s.level} aria-valuemin="0" aria-valuemax="100" aria-label={`Nivel de ${s.name}`}>
                <span className={styles.fill} style={{'--w': s.level + '%'}}></span>
              </div>
              <div className={styles.meta}>
                <span className={styles.percent}>{s.level}%</span>
                <span className="subtle">{s.note}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
