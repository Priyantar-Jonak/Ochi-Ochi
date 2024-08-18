import React from 'react'
import Navbar from './components/navbar.jsx'
import Landing from './components/landingscreen.jsx'
import Marquee from './components/marquee.jsx'
import About from './components/about.jsx'
import Eyes from './components/eyes.jsx'
import Featured from './components/featured.jsx'
import Clients from './components/clients.jsx'
import Projects from './components/projects.jsx'
import Eyesecond from './components/eyes2.jsx'
import Footer from './components/footer.jsx'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full h-screen text-white'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Clients />
      <Projects />
      <Eyesecond />
      <Footer />
    </div>
  )
}

export default App