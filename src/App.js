import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Summery from './components/Summery/Summery'
import Languages from './components/Languages/Languages'
import Projects from './components/Projects/Projects'
import Carrer from './components/Carrer/Carrer'
import Contact from './components/Contact/Contact'
import About from './components/About/About'



const App = () => {
  return (
    <>
    
    <div className="container">
      <Navbar/>
      <Home/>
      <Summery/>
      <About/>
      <Languages/>
      <Projects/>
      <Carrer/>
      <Contact/>


    </div>
    </>
  )
}

export default App
