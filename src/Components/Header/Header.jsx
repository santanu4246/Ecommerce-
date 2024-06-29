import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import './Header.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { WiNightFog } from 'react-icons/wi';

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <nav>
            <div className="navbar">
                <Link to="/"><div className="logo">SantanuKart</div></Link>
                {!isMobile && (
                    <div className="nav-lists">
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/about"><li>ABOUT</li></Link>
                        <Link to="/products"><li>PRODUCTS</li></Link>
                        <Link to="/contact"><li>CONTACT</li></Link>
                        <button>LOGIN IN</button>
                        <Link to="/cart">
                            <div className="cart">
                                <MdOutlineShoppingCart id='cart-icon' />
                                <span className='items-count'>0</span>
                            </div>
                        </Link>
                    </div>
                )}
                {isMobile && <Nav />}
            </div>
        </nav>
    );
}

export default Header;
