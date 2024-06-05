import './Header.css'
import { Carousel } from 'react-bootstrap'
import React, { useState } from "react"
import { assets } from '../../assets/assets'
export default function Header(){
    return(
        <>
                <div className='header'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className='d-block w-100'
                                    src={assets.hero_2}
                                    alt='First slide'
                                />
                                <Carousel.Caption>
                                    <h2>Summer Collection</h2>
                                    <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                                    <button>SHOP NOW</button>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className='d-block w-100'
                                    src={assets.hero_1}
                                    alt='First slide'
                                />
                                <Carousel.Caption>
                                    <h2>Winter Collection</h2>
                                    <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
                                    <button>SHOP NOW</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        
                        
                </div>
        </>
    )
}