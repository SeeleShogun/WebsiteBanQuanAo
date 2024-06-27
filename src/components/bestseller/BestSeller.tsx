import React, { useEffect, useState } from 'react'
import './BestSeller.scss'
import { assets, product_details_list } from '../../assets/assets'
import { Carousel } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BestSeller = () => {

  const bestSeller = product_details_list.filter((item) => item.price >= 25 && item.price <= 50)
  
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto xl:px-28 px-4'>
        <div className='text-center'>
          <h2 className='title'>Best sellers</h2>
          <p className='text-Black/75 capitalize md:w-2/3 mx-auto mb-8'>Just something we sale good</p>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          bestSeller.map((product) => (
            <SwiperSlide key={product._id}>
              <img src={product.image} alt="" className='mx-auto w-full hover:scale-105 transition-all duration-300' />
              <div className='mx-4 px-4'>
                <h4 className="text-base font-semibold mb-2">{product.name}</h4>
                <div className="flex justify-between">
                  <p className='text-black/50'>{product.category}</p>
                  <p className='font-semibold'>${product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }


      </Swiper>


    </>
  )
}



export default BestSeller
