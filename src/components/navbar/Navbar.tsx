import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import { assets } from "../../assets/assets";
export default function Navbar(){
    const[menu,setMenu] = useState("home")

    return (
    <>
    <div className="app">
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo"/>
            <ul className="navbar-menu">
                <li onClick={() =>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
                <li onClick={() =>setMenu("shop")} className={menu==="shop"?"active":""}>Shop</li>
                <li onClick={() =>setMenu("pages")} className={menu==="pages"?"active":""}>Pages</li>
                <li onClick={() =>setMenu("blog")} className={menu==="blog"?"active":""}>Blog</li>
                <li onClick={() =>setMenu("contacts")} className={menu==="contacts"?"active":""}>Contacts</li>
            </ul>
            <div className="navbar-right">

                <img src={assets.add_icon_search} alt=""/>
                <img src={assets.add_icon_heart} alt=""/>
                <div className="navbar-search-icon">
                
                <img src={assets.add_icon_cart} alt=""/>
                <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
            
        </div>
    </div>
    </>
    )
}