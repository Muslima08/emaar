import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Popup from './pages/Popup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/popup" element={<Popup/>}/>
      </Routes> 
    </div>
  )
}

export default App