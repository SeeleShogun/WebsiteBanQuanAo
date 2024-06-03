import { useState } from 'react'
import './index.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
function App() {

  return (
    <>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
