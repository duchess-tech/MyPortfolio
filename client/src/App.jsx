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
  const aboutmeRef = useRef(null);
  const skillsRef = useRef(null);
  const myprojectRef = useRef(null);
  const toolsRef = useRef(null);
  const contactRef = useRef(null);
  const contactRef2 = useRef(null);
  const NavRef = useRef(null);
  const refs = {
    aboutmeRef: aboutmeRef,
    skillsRef: skillsRef,
    myprojectRef: myprojectRef,
    toolsRef: toolsRef,
    contactRef: contactRef,
    contactRef2: contactRef,
    NavRef: NavRef

  }
  const handleTocontact2 = () => {
    refs.contactRef.current.scrollIntoView({ behavior: 'smooth' });
};


  return (
    <div >
      <Nav ref={refs} />
      <Aboutme ref={refs}  handleTocontact2={handleTocontact2}/>
      {/* <Quote /> */}
      <Myproject ref={refs} />
      <Skills ref={refs} />
      <Contact ref={refs} />
      <SocialMedia ref={refs} />
      <Appreciation />
      <Footer />
    </div>
  )
}

export default App
