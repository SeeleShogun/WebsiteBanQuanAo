import ExplorePage from '../../components/explorepage/ExplorePage'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import React, { useState } from "react"
export default function Home(){
    const[category,setCategory] = useState("All")
    return(
        <>
            <Navbar></Navbar>
            <Header></Header>
            <ExplorePage category={category} setCategory={setCategory}/>
            <Footer></Footer>
        </>
    )
}