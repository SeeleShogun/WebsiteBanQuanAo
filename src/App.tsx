import { useState } from 'react'
import './index.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import LoginPopup from './components/loginpopup/LoginPopup'
function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
      <Navbar setShowLogin={setShowLogin} ></Navbar>
        <Routes>
          < Route path='/' element={<Home/>} />
          < Route path='/cart' element={<Cart/>}/>
        </Routes>
        
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
