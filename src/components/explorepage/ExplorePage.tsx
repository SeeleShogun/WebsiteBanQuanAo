import React from 'react'
import './ExplorePage.css'
import { product_list } from '../../assets/assets'
const ExplorePage = ({category,setCategory}) => {
  return (
      <div className='explore-page' id = 'explore-page'>
          <h1>Explore our page</h1>
          <p className='explore-page-text'>A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.</p>
          <div className="explore-page-list">
              {product_list.map((item,index)=>{
                return (
                  <div onClick={()=>setCategory((prev:string)=>prev===item.product_name?"All":item.product_name)} key={index} className='explore-page-list-item'>
                      <img className={category===item.product_name?"active":""} src={item.product_image} alt='' />
                      <p>{item.product_name}</p>
                  </div>
                )
              })}
          </div>
          <hr/>
      </div>
  )
}

export default ExplorePage