import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { TbLayoutList } from "react-icons/tb";
import './Sort.css'
import { useFilterContext } from '../Context/FilterContext';
const Sort = ({ filter_products }) => {
  const {sorting} = useFilterContext();
  return (
    <div className='SortContainer'>
      <div className="grid-list">
        <BsFillGridFill className='icons' />
        <TbLayoutList className='icons' />
      </div>
      <p>{`${filter_products.length}  Products Available`}</p>
      <div className="sort-section">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest" >Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a" >Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default Sort