import React from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';
import FormatPrice from './Helper/FormatPrice';
const ProductList = ({ filter_products }) => {
  // console.log(filter_products);
  return (
    
    <div className='ProductListContainer'>
      
      {
        filter_products && filter_products.map((item, index) => (
          <Link to={`/productdetils/${item.id}`}>
            <div className='ProductCard'>
          <div key={index} className="ProductListContainer-cards">
            <img src={item.image} alt={`Product ${index}`} />
          </div>
          <div className="ProductDetails">
              <p>{item.name}</p> 
              <p>{<FormatPrice price={item.price}/>}</p>
            </div>
            </div>
          </Link>
        ))
      }
      
      
    </div>
    
  );
};

export default ProductList;
