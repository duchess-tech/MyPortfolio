import { useRef, useState } from 'react'
import Aboutme from './components/aboutme'
import Appreciation from './components/appreciation'
import Contact from './components/contactme'
import Footer from './components/footer'
import Myproject from './components/myprojects'
import Nav from './components/nav'
import Skills from './components/skills'
import './css/App.css'
import SocialMedia from './components/socialmedia'
import Quote from './components/Quote'


function App() {
   const refs = {
    aboutmeRef: useRef(null),
    skillsRef: useRef(null),
    myprojectRef: useRef(null),
    toolsRef: useRef(null),
    contactRef: useRef(null),
    contactRef2: useRef(null),
    NavRef: useRef(null)
  };

  return (
    <div>      
      <Aboutme 
      refs ={refs}
      />
      {/* <Quote /> */}
      <Myproject ref={refs} />
      <Skills ref={refs} />
      <Contact ref={refs} />
      <SocialMedia  />
      <Appreciation />
      <Footer />
    </div>
  )
}

export default App
