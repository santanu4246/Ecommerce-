import React, { useContext } from 'react'
import { useProductContext } from '../Context/ProductContext';
import './FeatureProducts.css'
import Product from './Product';

const FeatureProducts = () => {
    const { isLoading, featureProducts } = useProductContext();
    // console.log(featureProducts);
    return (
        <div className='FeatureProductsContainer'>
            <div className="container">
                <span>Check Now!</span>
                <h2>Our Features Services</h2>
            </div>
            <div className="products">
                {
                    featureProducts.map((elem) => {
                        return <Product key={elem.id}{...elem} />
                    })
                }
            </div>
        </div>
    )
}

export default FeatureProducts