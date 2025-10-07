
import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

function Boot(){
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    try{ document.documentElement.setAttribute('data-palette','noir'); localStorage.setItem('palette','noir'); }catch(e){}
    const t = setTimeout(()=> setLoading(false), 900) // leve loader
    return ()=> clearTimeout(t)
  },[])
  return (
    <>
      <div className={`loader ${loading ? "" : "hidden"}`} aria-hidden={!loading} aria-label="Cargando">
        <div style={{display:'flex',gap:'10px'}}>
          <div className="dot" /><div className="dot" /><div className="dot" />
        </div>
      </div>
      <div className="nebula-overlay"><App/></div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Boot/>
  </StrictMode>
)
