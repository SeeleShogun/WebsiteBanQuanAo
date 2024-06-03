import React from 'react'
import { useState } from 'react'
import './ProductItem.css'
const ProductItem = ({id,name,price,description,image}) => {

    const [itemCount,setItemCount] = useState(0)

  return (
    <div className='product-item'>

        <div className="product-item-img-container">
            <img className="product-item-image" src={image} alt="" />
            
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