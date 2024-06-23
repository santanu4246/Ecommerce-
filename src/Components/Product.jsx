import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
const Product = ({ id, name, image, price, category }) => {

    return (
        <Link to={`/productdetils/${id}`}>
            <div className="card">
                <div className='featureproducts'>
                    <img src={image} alt={name} />
                    <figcaption className='caption'>{category}</figcaption>
                </div>
            </div>

            <div className="card-data">
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </Link>
    )
}

export default Product