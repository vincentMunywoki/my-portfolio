import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'


const App = () => {
  return (
    <div>
      {/*mounting components in the App component.*/}
      <Navbar/>
      <Hero />
    </div>
  )
}

export default App