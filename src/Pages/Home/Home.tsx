import AppDownload from '../../components/appdownload/AppDownload'
import Banner from '../../components/banner/Banner'
import BestSeller from '../../components/bestseller/BestSeller'
import ExplorePage from '../../components/explorepage/ExplorePage'
import Header from '../../components/header/Header'
import Instagram from '../../components/instagram/Instagram'
import LatestNews from '../../components/latestnews/LatestNews'
import ProductDisplay from '../../components/productdisplay/ProductDisplay'
import './Home.scss'
import React, { useState } from "react"
export default function Home(){
    const[category,setCategory] = useState("All")
    return(
        <>
            
            <Header></Header>
            <Banner/>
            <BestSeller/>
            {/* <ExplorePage category={category} setCategory={setCategory}/>
            <ProductDisplay category={category} ></ProductDisplay> */}
            <Instagram/>
            <LatestNews/>
            <AppDownload/>
            
        </>
    )
}