import React from 'react'
import './Footer.scss'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.footer_logo} alt="" />
                    <p>The customer is at the heart of our unique business model, which includes design.</p>

                    <a href="https://www.facebook.com/" target='blank'><img src={assets.add_icon_facebook} alt="" /></a>
                    <a href="https://x.com/?lang=en" target='blank'><img src={assets.add_icon_twitter} alt="" /></a>
                    <a href="https://www.linkedin.com/" target='blank'><img src={assets.add_icon_linkedin} alt="" /></a>

                </div>
                <div className="footer-content-center">
                    <h2>SHOPPING</h2>
                    <ul>
                        <li>Contact Us</li>
                        <li>Payment Methods</li>
                        <li>Delivery</li>
                        <li>Return & Exchanges</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>0981626629</li>
                        <li>contact@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright © 2024 All rights reserved .
            </p>
        </div>
    )
}

export default Footer