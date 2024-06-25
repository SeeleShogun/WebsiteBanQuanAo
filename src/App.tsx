import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import LoginPopup from './components/loginpopup/LoginPopup'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Verify from './Pages/Verify/Verify'
import MyOrders from './Pages/MyOrders/MyOrders'
import Shop from './Pages/Shop/Shop'
import AboutUs from './Pages/AbouUs/AboutUs'
function App() {
  const [showLogin, setShowLogin] = useState<boolean>(false)

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} ></Navbar>
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/cart' element={<Cart />} />
          < Route path='/order' element={<PlaceOrder />} />
          < Route path='/details' element={<ProductDetails />} />
          < Route path='/shop' element={<Shop />} />
          < Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
          < Route path='/aboutus' element={<AboutUs />}/>
        </Routes>

      </div>
      <Footer></Footer>
    </>
  )
}

export default App
