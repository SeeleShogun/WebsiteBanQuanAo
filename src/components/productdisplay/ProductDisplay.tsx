import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../productitem/ProductItem'
const ProductDisplay = ({category}) => {

    const {product_details_list} = useContext(StoreContext)

  return (
    <div className='app'>
        <div className='product-display' id='product-display'>
            <h2>Top products</h2>
            <div className="product-display-list">
                {product_details_list.map((item,index)=>{
                    return <ProductItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay