import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import FormatPrice from './Helper/FormatPrice'
const Product = ({ id, name, image, price, category }) => {
    return (
        <Link to={`/productdetils/${id}`}>
            <div className="CardContainer">
            <div className="card">

                <div className='featureproducts'>
                    <img src={image} alt={name} />
                    <figcaption className='caption'>{category}</figcaption>
                </div>
         
            <div className="card-data">
                <span>{name}</span>
                <span>{<FormatPrice price={price}/>}</span>
            </div>
            </div>
        </div>
        </Link>
    )
}

export default Product