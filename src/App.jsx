import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Cases from './components/Cases'
import Depoimentos from './components/Depoimentos'



function App() {
  return(
    <div>
      <Header />
      <Hero />
      <Cases />
      <Depoimentos />
    </div>
  )
 
}

export default App
