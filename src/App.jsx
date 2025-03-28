import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
<BrowserRouter>
  <Routes>
    <Route path='about' element={<About/>}/>
    <Route path='/' element={<Home/>}/>
  </Routes>
</BrowserRouter>
  )
}

export default App

