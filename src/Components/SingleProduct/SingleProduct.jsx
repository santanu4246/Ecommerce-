import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../Context/ProductContext';
const API = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {


  const { getSingleProduct, isSingleLoding, singleProduct } = useProductContext()

  const { id } = useParams();
  // console.log(id);
  const { id: alis, name, company, price, description, category, stock, shipping, reviews, stars } = singleProduct
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])
  console.log(singleProduct);
  return (
    <div>{name}</div>
  )
}

export default SingleProduct