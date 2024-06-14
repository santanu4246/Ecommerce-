import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
import './Header.css'
import { MdOutlineShoppingCart } from "react-icons/md";
const Header = () => {
    return (
        <nav>
            <div className="navbar">
                <Link to="/"><div className="logo">SantanuKart</div></Link>
                <div className="nav-lists">
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/about"><li>ABOUT</li></Link>
                    <Link to="/profucts"><li>PRODUCTS</li></Link>
                    <Link to="/contact"><li>CONTACT</li></Link>
                    <button>LOGIN IN</button>
                    <Link to="/cart"><div className="cart">
                        <MdOutlineShoppingCart id='cart-icon' />

                            <span className='items-count'>0</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>

    )
}


export default Header