
export function getInitialTheme(){
  if(typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem('theme')
  if(saved) return saved
  const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefers ? 'dark' : 'light'
}
export function applyTheme(theme){
  const root = document.documentElement
  if(theme === 'light') root.classList.add('theme-light')
  else root.classList.remove('theme-light')
  localStorage.setItem('theme', theme)
}


export function getInitialPalette(){
  if(typeof window === 'undefined') return 'nebula'
  const saved = localStorage.getItem('palette')
  return saved || 'nebula'
}
export function applyPalette(palette){
  const root = document.documentElement
  root.setAttribute('data-palette', palette)
  localStorage.setItem('palette', palette)
}
