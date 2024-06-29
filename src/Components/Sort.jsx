import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { TbLayoutList } from "react-icons/tb";
import './Sort.css'
const Sort = () => {
  return (
    <div className='SortContainer'>
      <div className="grid-list">
      <BsFillGridFill className='icons'/>
      <TbLayoutList className='icons'/>
      </div>
      <p>Total Products</p>
      <select name="" id="">
        <option value="">Please Select</option>
      </select>
    </div>
  )
}

export default Sort