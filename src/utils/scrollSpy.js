
import { useEffect, useState } from 'react'

export function useScrollSpy(ids){
  const [active, setActive] = useState(ids[0])
  useEffect(()=>{
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const id = e.target.getAttribute('id')
          if(id) setActive(id)
        }
      })
    }, { rootMargin: '-45% 0px -50% 0px', threshold: .01 })
    ids.forEach(id=>{
      const el = document.getElementById(id)
      if(el) obs.observe(el)
    })
    return ()=> obs.disconnect()
  },[ids.join(',')])
  return active
}
