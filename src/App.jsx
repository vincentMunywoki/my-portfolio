import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'


const App = () => {
  return (
    <div>
      {/*mounting components in the App component.*/}
      <Navbar/>
      <Hero />
      <About />
    </div>
  )
}

export default App