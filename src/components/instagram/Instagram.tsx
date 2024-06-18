import React from 'react'
import './Instagram.scss'
import { assets } from '../../assets/assets'
const Instagram = () => {
    return (
        <div className="instagram-container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="instagram__pic">
                        <div className="instagram__pic__item"> <a href="https://www.instagram.com/boom.blinded/" target='blank'> <img src={assets.instagram_1} alt="" /></a> </div>
                        <div className="instagram__pic__item"> <a href="https://www.instagram.com/boom.blinded/" target='blank'> <img src={assets.instagram_2} alt="" /></a> </div>
                        <div className="instagram__pic__item"> <a href="https://www.instagram.com/boom.blinded/" target='blank'> <img src={assets.instagram_3} alt="" /></a> </div>
                        <div className="instagram__pic__item"> <a href="https://www.instagram.com/boom.blinded/" target='blank'> <img src={assets.instagram_4} alt="" /></a> </div>
                        <div className="instagram__pic__item"> <a href="https://www.instagram.com/boom.blinded/" target='blank'> <img src={assets.instagram_5} alt="" /></a> </div>
                        <div className="instagram__pic__item"> <a href="https://www.instagram.com/boom.blinded/" target='blank'> <img src={assets.instagram_6} alt="" /></a> </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="instagram__text">
                        <a href="https://www.instagram.com/boom.blinded/" target='blank'><h2>Instagram</h2></a>   
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                        <h3>#Male_Fashion</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram