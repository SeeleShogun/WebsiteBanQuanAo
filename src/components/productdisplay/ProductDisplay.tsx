import React, { useContext } from 'react'
import './ProductDisplay.scss'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../productitem/ProductItem'
const ProductDisplay = ({category}) => {

    const {product_details_list} = useContext(StoreContext)

  return (
        <div className='product-display' id='product-display'>
            <h2>Top products</h2>
            <div className="product-display-list">
                {product_details_list.map((item,index)=>{
                    if(category==='All' || category===item.category){
                        return <ProductItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                                
                    }
                    
                })}
            </div>
        </div>

  )
}

export default ProductDisplay