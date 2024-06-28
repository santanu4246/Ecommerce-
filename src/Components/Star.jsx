import React from 'react'
import "./Star.css"
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({ stars, reviews }) => {
    const StartRating = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return <span key={index}>
            {
                stars >= index + 1 ? (<FaStar className='icons'/>) : stars >= number ? (<FaStarHalfStroke className='icons'/>) : (<AiOutlineStar className='icons'/>)
            }
        </span>
    });
    return (
        <div className='star-component'>
           {StartRating}
           <p>({reviews} coustomer reviews)</p>
        </div>
    )
}

export default Star