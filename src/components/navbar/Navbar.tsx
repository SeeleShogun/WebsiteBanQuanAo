import React, { useContext, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.scss'
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

interface NavBarProps {
    setShowLogin: (show: boolean) => void
}
export default function Navbar({setShowLogin}:NavBarProps){
    const[menu,setMenu] = useState("home")

    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        navigate('/')
    }

    return (
    <>
        <div className="navbar">
            <Link to='/' onClick={() =>setMenu("home")} > <img src={assets.logo} alt="" className="logo"/> </Link>
            <ul className="navbar-menu">
               <Link to='/'> <li onClick={() =>setMenu("home")} className={menu==="home"?"active":""}>Home</li> </Link>
               <Link to='/shop'> <li onClick={() =>setMenu("shop")} className={menu==="shop"?"active":""}>Shop</li> </Link>
                <Link to='/aboutus'> <li onClick={() =>setMenu("pages")} className={menu==="pages"?"active":""}>Pages</li> </Link>
                <li onClick={() =>setMenu("blog")} className={menu==="blog"?"active":""}>Blog</li>
                <li onClick={() =>setMenu("contacts")} className={menu==="contacts"?"active":""}>Contacts</li>
            </ul>
            <div className="navbar-right">

                <img src={assets.add_icon_search} alt=""/>
                <img src={assets.add_icon_heart} alt=""/>
                <div className="navbar-search-icon">
                
                <Link to='/cart'><img src={assets.add_icon_cart} alt=""/> </Link>
                <div className="dot"></div>
                </div>
                {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
                :<div className="navbar-profile">
                    <img src={assets.add_icon_profile} alt="" />
                    <ul className="navbar-profile-dropdown">
                        <li onClick={()=>navigate('/myorders')} ><img src={assets.add_icon_bag} alt="" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets.add_icon_logout} alt="" /><p>Logout</p></li>
                    </ul>
                    </div>}
                
            </div>
            
        </div>
    </>
    )
}