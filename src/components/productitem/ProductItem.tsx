import React, { useContext } from 'react'
import { useState } from 'react'
import './ProductItem.scss'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const ProductItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

  return (
    <div className='product-item'>

        <div className="product-item-img-container">
            <img className="product-item-image" src={url+"/images/"+image} alt="" />
            {
                !cartItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_addwhite} alt="" />
                    :<div className='product-item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={assets.add_icon_remove} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_addgreen} alt="" />
                    </div>
            }
        </div>
        
        <div className="product-item-info">
            <div className="product-item-name">
                <p>{name}</p>
            </div>
            <p className='product-item-desc'>{description}</p>
            <p className="product-item-price">${price}</p>
        </div>
    </div>
  )
}

export default ProductItem