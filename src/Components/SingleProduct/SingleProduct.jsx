import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../Context/ProductContext';
const API = "https://api.pujakaitem.com/api/products";
import "./SingleProduct.css"
import BeatLoader from "react-spinners/BeatLoader";
import FormatPrice from '../Helper/FormatPrice'
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from 'react-icons/md';
import Star from '../Star';
const SingleProduct = () => {

  const { getSingleProduct, isSingleLoding, singleProduct } = useProductContext()

  const { id } = useParams();
  // console.log(id);
  const { id: alis, name, company, price, description, category, stock, shipping, reviews, stars, image= [{url: ""}] } = singleProduct
  console.log(image);
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])
  return (
    <div className="SingleProductContainer">
      {isSingleLoding ? (
        <BeatLoader color="#00fd19" />
      ) : (
        <>
          <div className='Single-image'>
          <img src={image[0].url} alt="" />
          </div>
          <div className="Single-product-details">
            <h2>{name}</h2>
           <Star stars = {stars} reviews = {reviews}/>
            <p>
              MRP: <del><FormatPrice price={price + 250000} /></del>
            </p>
            <p>
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty flex">
              <div className="product-data-warranty-icons">
                <TbTruckDelivery className='singleProduct-icon' />
                <span>Free Delivery</span>
              </div>
              <div className="product-data-warranty-icons">
                <TbReplace className='singleProduct-icon' />
                <span>7 Days Replacement</span>
              </div>
              <div className="product-data-warranty-icons">
                <MdSecurity className='singleProduct-icon' />
                <span>Year Warranty</span>
              </div>
              <div className="product-data-warranty-icons">
                <TbTruckDelivery className='singleProduct-icon' />
                <span>Delivered</span>
              </div>
            </div>

            <div className="product-data-info">
              <p>Available: <span>{stock > 0 ? "In Stock" : "Not Available"}</span></p>

              <p>ID: <span> {id}</span></p>

              <p>Brand: <span> {company}</span></p>

            </div>
          </div>
        </>
      )}
    </div>

  )
}

export default SingleProduct