
import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Particles from './components/Particles/Particles'
import { useScrollSpy } from './utils/scrollSpy'

export default function App(){
  const sections = ['inicio','sobre-mi','habilidades','proyectos','contacto']
  const active = useScrollSpy(sections)
  return (
    <>
      <Particles />
      <Navbar active={active} />
      <main>
        <Hero id="inicio"/>
        <About id="sobre-mi"/>
        <Skills id="habilidades"/>
        <Projects id="proyectos"/>
        <Contact id="contacto"/>
      </main>
      <Footer/>
    </>
  )
}
