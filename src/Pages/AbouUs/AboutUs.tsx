import React from 'react'
import './AboutUs.scss'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className="about-div">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about__pic">
                                <img src={assets.about_us} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>Who Are We ?</h4>
                                <p>Contextual advertising programs sometimes have strict policies that need to be adhered too.
                                    Let’s take Google as an example.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>What We Do ?</h4>
                                <p>In this digital generation where information can be easily obtained within seconds, business
                                    cards still have retained their importance.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="about__item">
                                <h4>Why Choose Us</h4>
                                <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home
                                    sits, but for older or infirm people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="testimonial-div">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="testimonial__text">
                                <FontAwesomeIcon icon={faQuoteRight} />
                                <p>“Remember, every ‘mistake’ your customer makes,
                                    it’s not because they’re stupid. It’s because your website sucks.”
                                </p>
                                <div className="testimonial__author">
                                    <div className="testimonial__author__pic">
                                        <img src={assets.testimonial_author} alt="" />
                                    </div>
                                    <div className="testimonial__author__text">
                                        <h5>Augusta Schultz</h5>
                                        <p>Fashion Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="testimonial__pic set-bg" style={{
                                backgroundImage: `url(${assets.testimonial_pic})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '100%'
                            }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="counter-div">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">102</h2>
                                </div>
                                <span>Our <br />Clients</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">30</h2>
                                </div>
                                <span>Total <br />Categories</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">102</h2>
                                </div>
                                <span>In <br />Country</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter__item">
                                <div className="counter__item__number">
                                    <h2 className="cn_num">98</h2>
                                    <strong>%</strong>
                                </div>
                                <span>Happy <br />Customer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-div">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Team</span>
                                <h2>Meet Our Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item">
                                <img src={assets.team_1} alt=""/>
                                    <h4>John Smith</h4>
                                    <span>Fashion Design</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item">
                                <img src={assets.team_2} alt=""/>
                                    <h4>이상혁</h4>
                                    <span>C.E.O</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item">
                                <img src={assets.team_3} alt=""/>
                                    <h4>Sean Robbins</h4>
                                    <span>Manager</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item">
                                <img src={assets.team_4} alt=""/>
                                    <h4>Lucy Myers</h4>
                                    <span>Delivery</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="partner-div">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Partner</span>
                        <h2>Happy Clients</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" className="client__item"><img src={assets.client_1} alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" className="client__item"><img src={assets.client_2} alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" className="client__item"><img src={assets.client_3} alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" className="client__item"><img src={assets.client_4} alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" className="client__item"><img src={assets.client_5} alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" className="client__item"><img src={assets.client_6} alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" className="client__item"><img src={assets.client_7} alt=""/></a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" className="client__item"><img src={assets.client_8} alt=""/></a>
                </div>
            </div>
        </div>
            </div>


        </div>

    )
}

export default AboutUs