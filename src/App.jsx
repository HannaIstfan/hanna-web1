import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Offers from './Components/Offers/Offers'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallary from './Components/Gallary/Gallary'
import Testimonials from './Components/Testimonials/testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='contianer'>
        <Title title='What We Offers' subtitle='OUR OFFERS' />
        <Offers/>
        <About />
        <Title title='Campus Photos' subtitle=' GALLERY' />
        <Gallary />
        <Title title='What Custemers say ' subtitle=' TESTIMONIALS' />
        <Testimonials />
        <Title title='Get in Touch' subtitle='Contact Us' />
        <Contact/>
        <Footer />
        </div>
      
    </div>
  )
}
