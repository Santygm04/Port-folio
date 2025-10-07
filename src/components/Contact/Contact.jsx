
import { useState } from 'react'
import styles from './Contact.module.css'
import { motion } from 'framer-motion'

export default function Contact({id}){
  const [data, setData] = useState({ name:'', email:'', message:'' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const buildMessage = () => {
    return `Hola, soy ${data.name} (${data.email}).%0A%0A${encodeURIComponent(data.message)}%0A%0AEnviado desde el portfolio.`
  }
  const onWhatsApp = () => {
    // Validación previa
    const ok = Object.entries(data).every(([k,v])=> validate(k,v))
    if(!ok) return
    const phone = import.meta.env.VITE_WHATSAPP_PHONE // ej: 5493811234567
    if(!phone){ alert('Falta configurar VITE_WHATSAPP_PHONE en tu .env'); return }
    const msg = buildMessage()
    const url = `https://wa.me/${phone}?text=${msg}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const validate = (k, v) => {
    let msg = ''
    if(k==='name' && v.trim().length < 2) msg = 'Nombre muy corto'
    if(k==='email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = 'Email inválido'
    if(k==='message' && v.trim().length < 10) msg = 'Mensaje muy corto'
    setErrors(e => ({...e, [k]: msg}))
    return !msg
  }

  const onChange = e => {
    const {name, value} = e.target
    setData(d => ({...d, [name]: value}))
    validate(name, value)
  }

const onSubmit = async e => {
  e.preventDefault()
  const ok = Object.entries(data).every(([k,v])=> validate(k,v))
  if(!ok) return
  const FORM_ID = import.meta.env.VITE_FORMSPREE_ID
  if(FORM_ID){
    try{
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method:'POST',
        headers:{ 'Accept':'application/json', 'Content-Type':'application/json' },
        body: JSON.stringify(data)
      })
      if(res.ok){ setSent(true); setData({name:'', email:'', message:''}); setErrors({}) }
      else{
        const err = await res.json().catch(()=>({}))
        alert('No se pudo enviar el mensaje. Revisa la configuración de Formspree.')
        console.error('Formspree error', err)
      }
    }catch(err){
      alert('Error de red al enviar el formulario.')
      console.error(err)
    }
  }else{
    // Fallback: abre el cliente de correo
    window.location.href = `mailto:santiagogilmina2@gmail.com?subject=Contacto%20desde%20portfolio&body=${encodeURIComponent(data.message + '\n\n— ' + data.name + ' (' + data.email + ')')}`
  }
}

  return (
    <section id={id} className="section" aria-label="Contacto">
      <div className="container">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5}}>Contacto</motion.h2>
        <div className={styles.grid}>
          <motion.form className={styles.form} onSubmit={onSubmit}
              initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.55}}>
            <label>
              <span>Nombre</span>
              <input name="name" value={data.name} onChange={onChange} aria-invalid={!!errors.name} aria-describedby="err-name" />
              {errors.name ? <small id="err-name" className={styles.err}>{errors.name}</small> : null}
            </label>
            <label>
              <span>Email</span>
              <input name="email" value={data.email} onChange={onChange} aria-invalid={!!errors.email} aria-describedby="err-email" />
              {errors.email ? <small id="err-email" className={styles.err}>{errors.email}</small> : null}
            </label>
            <label>
              <span>Mensaje</span>
              <textarea name="message" rows="5" value={data.message} onChange={onChange} aria-invalid={!!errors.message} aria-describedby="err-message" />
              {errors.message ? <small id="err-message" className={styles.err}>{errors.message}</small> : null}
            </label>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
  <button className="btn secondary" type="submit" aria-live="polite">{sent ? '¡Enviado!' : 'Enviar mensaje'}</button>
  <button type="button" className="btn secondary" onClick={onWhatsApp} aria-label="Enviar por WhatsApp">Enviar por WhatsApp</button>
</div>
          </motion.form>
          <motion.div className={styles.side}
              initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.55, delay:.05}}>
            <div className={styles.spaceCard}>
              <div className={styles.glow}></div>
              <h3>¿Hablamos?</h3>
              <p className="subtle">Estoy disponible para proyectos freelance, colaboración o dudas técnicas.</p>
              <ul className={styles.links}>
                <li><a href="mailto:santiagogilmina2@gmail.com" className="btn secondary">santiagogilmina2@gmail.com</a></li>
                <li><a className="btn secondary" href="https://github.com/Santygm04" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a className="btn secondary" href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
              <div className={styles.map} role="img" aria-label="Ilustración espacial">
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
