import { useMemo, useState } from 'react'
import styles from './Projects.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const allProjects = [
  {
    id:1,
    title:'E-commerce Mayorista',
    img:'/src/assets/aesthetic.png',
    desc:'Plataforma mayorista de indumentaria con catálogo completo, gestión de pedidos al por mayor y sistema de precios diferenciados',
    stack:['React','Node.js','CSS','JavaScript','MondoDB'],
    tags:['react'],
    href:'https://aestheticmakeup.com.ar/',               // ← ruta del proyecto
    repo:'https://github.com/Santygm04/aesthetic-ecommerce' // ← GitHub
  },
  {
    id:2,
    title:'E-commerce Jugueteria',
    img:'/src/assets/project2.svg',
    desc:'Tienda online minorista de ropa para hombre y mujer con carrito de compras, filtros por género y tallas, y sistema de pagos integrado',
    stack:['React','Node.js','Tailwind','JavaScript','MongoDB'],
    tags:['react'],
    href:'/proyectos/jugueteria',
    repo:'https://github.com/Santygm04' // ajustá al repo correcto si querés
  },
  {
    id:3,
    title:'Landing Page Corporativa',
    img:'/src/assets/mambo.png',
    desc:'Página de aterrizaje moderna para empresa de estudio de mercado con animaciones y diseño responsive',
    stack:['React','JavaScript','CSS'],
    tags:['react'],
    href:'https://walking-group.vercel.app/',
    repo:'https://github.com/Santygm04/Walking-Group/tree/main/mambo-market'
  },
]

export default function Projects({id}){
  const [filter, setFilter] = useState('all')
  const list = useMemo(()=> filter==='all' ? allProjects : allProjects.filter(p=> p.tags.includes('react')), [filter])
  return (
    <section id={id} className="section" aria-label="Proyectos">
      <div className="container">
        <div className={styles.head}>
          <h2>Proyectos</h2>
          <div className={styles.filters} role="tablist" aria-label="Filtros">
            <button className={`${styles.tab} ${filter==='all'?styles.active:''}`} onClick={()=>setFilter('all')} role="tab" aria-selected={filter==='all'}>Todos</button>
            <button className={`${styles.tab} ${filter==='react'?styles.active:''}`} onClick={()=>setFilter('react')} role="tab" aria-selected={filter==='react'}>React</button>
          </div>
        </div>
        <div className={styles.grid}>
          <AnimatePresence initial={false} mode="popLayout">
            {list.map((p,i)=> (
              <motion.article key={p.id} layout initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} exit={{opacity:0}} transition={{duration:.45, delay:i*0.03}} className={styles.card}>
                <div className={styles.preview}>
                  <img src={p.img} alt={`Vista previa de ${p.title}`} loading="lazy" />
                  <div className={styles.overlay}>
                    {/* botón para ver el proyecto (ruta propia) */}
                    <a className="btn secondary" href={p.href} aria-label={`Ver ${p.title}`}>Ver proyecto</a>
                    {/* botón para GitHub */}
                    <a className="btn" href={p.repo} target="_blank" rel="noreferrer" aria-label={`GitHub de ${p.title}`}>GitHub</a>
                  </div>
                </div>
                <div className={styles.body}>
                  <h3>{p.title}</h3>
                  <p className="subtle">{p.desc}</p>
                  <div className={styles.stack}>
                    {p.stack.map(s=> <span key={s} className="badge">{s}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
