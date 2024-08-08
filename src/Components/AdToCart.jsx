import React, { useState } from 'react'
import './AdToCart.css'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

const AdToCart = ({ Product }) => {
    const { id, colors} = Product;
    const [Color, setColor] = useState(null);
    const {addtoCart} = useCartContext();
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
            <Link to={"/cart"} onClick={()=>addtoCart(id,Color,Product)}><button style={{width:"100px",height:"30px",borderRadius:"10px",marginTop:"20px" ,backgroundColor:"#8A2BE2",color:"white"}}>Add to cart</button></Link>
        </div>
    )
}

export default AdToCart
