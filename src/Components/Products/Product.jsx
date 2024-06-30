import React from 'react'
import ProductList from '../ProductList'
import Sort from "../Sort"
import FilterSection from "../FilterSection"
import { useFilterContext } from '../../Context/FilterContext'
import './Product.css'
const Product = () => {
  const { filter_products } = useFilterContext()
  return (
    <div className='ProductContainer'>
      <div className="FilterSection">
        <FilterSection />
      </div>

      <div className="ProductContainerRight">
        <section className='product-view-sort'>
          <div className="sortFilter">
            <Sort filter_products={filter_products}/>
          </div>

          <div className="main-product">
            <ProductList filter_products={filter_products}/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Product