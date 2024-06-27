// ProductDetailsDisplay.jsx
import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import ProductDetails from '../../Pages/ProductDetails/ProductDetails';
import { useParams } from 'react-router-dom'

const ProductDetailsDisplay = () => {
    const { product_details_list } = useContext(StoreContext);
    const { id } = useParams()

    const detailsProduct = product_details_list.filter((product) => id === product.name);
    return (
        <>
        
        <ProductDetails detailsProduct={detailsProduct} />
        </>
    );
};

export default ProductDetailsDisplay;
