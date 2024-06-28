import React, { useState } from 'react'
import './AdToCart.css'
import { FaCheck } from "react-icons/fa";

const AdToCart = ({ Product }) => {
    const { id, colors, stock } = Product;
    const [Color, setColor] = useState(null);

    return (
        <div className='colors'>
            <p>
                Colors:
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
            </p>
        </div>
    )
}

export default AdToCart
