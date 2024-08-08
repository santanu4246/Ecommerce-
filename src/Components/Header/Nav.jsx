import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import "./Nav.css";
import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCartContext } from "../../Context/CartContext";
const Nav = () => {
  const [mobilenav, setmobilenav] = useState(false);

  const handleCrossClick = () => {
    document.querySelector("body").style.overflow = "auto";
    setmobilenav(false);
  };

  const handleMenuClick = () => {
    document.querySelector("body").style.overflow = "hidden";
    setmobilenav(true);
  };

  const {amount} = useCartContext();
  
  return (
    <>
      <div className="mobile-nav">
        <RiMenu3Fill className="mobile-nav-icon" onClick={handleMenuClick} />
      </div>
      <div className={`mob-nav ${mobilenav ? "open" : ""}`}>
        <FaXmark
          className="mobile-nav-icon"
          style={{ position: "absolute", top: "25px", right: "20px" }}
          onClick={handleCrossClick}
        />
        <Link to="/">
          <li onClick={handleCrossClick}>HOME</li>
        </Link>
        <Link to="/about">
          <li onClick={handleCrossClick}>ABOUT</li>
        </Link>
        <Link to="/products">
          <li onClick={handleCrossClick}>PRODUCTS</li>
        </Link>
        <Link to="/contact">
          <li onClick={handleCrossClick}>CONTACT</li>
        </Link>
        <button onClick={handleCrossClick}>LOGIN IN</button>
        <Link to="/cart" >
          <div className="cart">
            <MdOutlineShoppingCart
              id="cart-icon"
              style={{ fontSize: "2.5rem" }}
              onClick={handleCrossClick}
            />
            <div className="items-count" onClick={handleCrossClick}>
              {amount}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
