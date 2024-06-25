import React from 'react'
import './LatestNews.scss'
import { assets } from '../../assets/assets'
const LatestNews = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Latest News</span>
                        <h2>Fashion New Trends</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic" style={{
                            backgroundImage: `url(${assets.blog_1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '300px'
                        }}></div>
                        <div className="blog__item__text">
                            <span> 16 February 2030</span>
                            <h5>What Curling Irons Are The Best Ones</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic" style={{
                            backgroundImage: `url(${assets.blog_2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '300px'
                        }}></div>
                        <div className="blog__item__text">
                            <span> 21 February 2030</span>
                            <h5>Eternity Bands Do Last Forever</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic" style={{
                            backgroundImage: `url(${assets.blog_3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '300px'
                        }}></div>
                        <div className="blog__item__text">
                            <span> 28 February 2030 </span>
                            <h5>The Health Benefits Of Sunglasses</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews