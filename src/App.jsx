import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import ProductViewer from './Components/ProductViewer.jsx' 
import Showcase from './Components/Showcase.jsx'
import Performance from './Components/Performance.jsx'
import Highlights from './Components/Highlights.jsx'
import Features from './Components/Features.jsx'
import { gsap } from 'gsap' 
import { ScrollTrigger, SplitText } from 'gsap/all';
import Footer from './Components/Footer.jsx'


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  )
}
export default App
