import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AboutPages from './Pages/AboutPages'
import FirstPages from './Pages/FirstPages'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FirstPages/>}/>
        <Route path='about' element={<AboutPages/>}/>
      </Routes>
      
    </div>
  )
}

export default App