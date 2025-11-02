import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import ProductViewer from './Components/ProductViewer.jsx' 
import Showcase from './Components/Showcase.jsx'
import { gsap } from 'gsap' 
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  )
}
export default App
