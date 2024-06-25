import React, { useState } from 'react'
import './Shop.scss'
import ExplorePage from '../../components/explorepage/ExplorePage'
import ProductDisplay from '../../components/productdisplay/ProductDisplay'


const Shop = () => {

  const handlePriceChange = (values) => {
    console.log(values)
}
    const[category,setCategory] = useState("All")
  return (
    <div>
        <ExplorePage category={category} setCategory={setCategory}/>
        <ProductDisplay category={category} ></ProductDisplay>
    </div>
  )
}

export default Shop