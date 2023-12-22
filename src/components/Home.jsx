import React from 'react'
import Wallet from './Layouts/Home/Wallet'
import TopSection from './Layouts/Home/TopSection'
import About from './Layouts/Home/About'
import Graf from './Layouts/Home/Graf'
import Testimonial from './Layouts/Home/Testimonial'
import Works from './Layouts/Home/Works'
import Contact from './Layouts/Home/Contact'
const Home = () => {
  return (
    <>
      <TopSection />
      <Wallet/>
      <About/>
      <Graf/>
      <Testimonial/>
      <Works/>
      <Contact/>
    </>
  )
}

export default Home