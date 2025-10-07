import { useEffect, useRef } from 'react'

export default function Particles(){
  const ref = useRef(null)
  useEffect(()=>{
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w, h, raf, stars

    function isLight(){ return document.documentElement.classList.contains('theme-light') }

    function resize(){
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      stars = Array.from({length: Math.floor((w*h)/ (isLight()? 23000 : 20000))}, ()=> ({
        x: Math.random()*w,
        y: Math.random()*h,
        z: Math.random()*1 + .2,
        r: Math.random()*1.0 + .2,
      }))
    }
    function draw(){
      ctx.clearRect(0,0,w,h)
      const light = isLight()
      const baseAlpha = light ? 0.22 : 0.35
      const color = light ? '#79cdb1' : '#96d8c2'
      for(const s of stars){
        ctx.globalAlpha = baseAlpha + s.z*0.20
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2)
        ctx.fill()
        s.y += .052 * (1.5 - s.z)
        if(s.y > h) s.y = -5, s.x = Math.random()*w
      }
      raf = requestAnimationFrame(draw)
    }
    resize()
    draw()
    window.addEventListener('resize', resize)
    return ()=> { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  },[])

  return <canvas ref={ref} style={{position:'fixed', inset:0, zIndex:-2}} aria-hidden="true"/>
}
