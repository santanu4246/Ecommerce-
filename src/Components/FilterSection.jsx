import React, { useState } from 'react'
import './FilterSection.css'
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from '../Context/FilterContext';

const FilterSection = () => {
  const [Color, setColor] = useState(null);
  const list = [
    "All",
    "Mobile",
    "Laptop",
    "Computer",
    "Accessories",
    "Watch"
  ]
  const colors = [
    '#8A2BE2',
    '#3CB371',
    '#FFD700',
    '#DC143C',
    '#00CED1'
  ];
const {filters:{text},updateFilterValue} = useFilterContext();
  return (
    <div className='FilterSectionContainer'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="text" value={text} placeholder='SEARCH' onChange={updateFilterValue} />
      </form>

      <div className="filters">
        <p style={{ fontSize: "1.2rem" }}>Catagory</p>
        {
          list.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </div>

      <div className="company-sort">
        <p>Company</p>
        <select name="" id="">
          <option value="">All</option>
        </select>
      </div>

      <div className="colorsOptions">
        <p>Colors</p>
        <div className="Colors">
          <p>All</p>
          {
            colors.map((curColor, index) => (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={Color === curColor ? "Colorbtn active" : "Colorbtn"}
                onClick={() => setColor(curColor)}
              >
                {Color === curColor && <FaCheck className='check' />}
              </button>
            ))
          }
        </div>
      </div>

      <div className="price-sort">
        <p>Price</p>
        <input type="range" name="" id="" />
      </div>
      <button>Clear Filter</button>
    </div>
  )
}

export default FilterSection