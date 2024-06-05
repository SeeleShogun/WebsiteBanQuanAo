import './Banner.css'
import React, { useState } from "react"
export default function Banner(){
    return(
        <>
                <div className='banner'>
                    {/* <div className="banner-content"> */}
                        <div className="banner-content1">
                            <h2>CLOTHING COLLECTIONS 2024</h2>
                            <button>SHOP NOW</button>
                        </div>
                        <div className="banner-content2">
                            <h2>Accessories</h2>
                            <button>SHOP NOW</button>
                        </div>
                        <div className="banner-content3">
                            <h2>Shoes Spring 2024</h2>
                            <button>SHOP NOW</button>
                        </div>
                        
                    {/* </div> */}


                </div>
        </>
    )
}