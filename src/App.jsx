import React from 'react'
import Header from './component/header'
import Main from './component/main'
import Footer from './component/footer'
import Appointment from './component/pages/appointment'
import Contact from './component/pages/contact'
import Services from './component/pages/services'
import About from './component/pages/about'

const App = () => {
  return (
    <div className='bg-black overflow-hidden text-white'>
      <div className='lg:w-[70%] sm:w-[80%] w-[95%] mx-auto uppercase'>
        <Header />
        <Main />
        <About />
        <Services />         
        <Contact/>
        <Appointment/>
        <Footer />
        </div>
    </div>
  )
}

export default App
