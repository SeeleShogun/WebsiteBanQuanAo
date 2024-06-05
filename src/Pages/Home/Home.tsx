import AppDownload from '../../components/appdownload/AppDownload'
import ExplorePage from '../../components/explorepage/ExplorePage'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import ProductDisplay from '../../components/productdisplay/ProductDisplay'
import './Home.css'
import React, { useState } from "react"
export default function Home(){
    const[category,setCategory] = useState("All")
    return(
        <>
            
            <Header></Header>
            <ExplorePage category={category} setCategory={setCategory}/>
            <ProductDisplay category={category} ></ProductDisplay>
            <AppDownload/>
            
        </>
    )
}