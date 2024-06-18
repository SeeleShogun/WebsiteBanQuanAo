import React from 'react'
import './productDetails.scss'
import { assets } from '../../assets/assets'

const ProductDetails = () => {


  return (
    <div>
      <div className="row">
        <div className="product-details-left col-lg-7">
          <div className="product-details-left-image">
            <img src={assets.product_big1} alt="" />
          </div>
          <div className="product-details-left-thumbnail">
            <div className='swiper swiper-container swiper-container-initialized swiper-container-pointer-events swiper-container-free-mode swiper-container-thumbs swiper-container-horizontal swiper-initialized swiper-backface-hidden swiper-thumbs swiper-vertical'>
              <div className="swiper-wrapper">
                <div className='swiper-slide swiper-slide-active swiper-slide-visible swiper-slide-fully-visible product-single__image-item swiper-slide-thumb-active'>
                    <img src={assets.product_big2} alt="" />
                </div>
                <div className="swiper-slide swiper-slide-next swiper-slide-visible swiper-slide-fully-visible product-single__image-item">
                    <img src={assets.product_big3} alt="" />
                </div>
                <div className='swiper-slide swiper-slide-visible swiper-slide-fully-visible product-single__image-item'>
                    <img src={assets.product_big4} alt="" />
                </div>
                
              </div>

            </div>
          </div>
        </div>
        <div className="product-details-right col-lg-5">
          SOMETIME
        </div>
      </div>




    </div>
  )
}

export default ProductDetails