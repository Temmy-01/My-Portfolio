import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
