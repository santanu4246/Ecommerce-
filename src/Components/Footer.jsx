import React from 'react'
import './Footer.css'
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='FooterContainer'>
      <div className="left">
        <div className="col">
          <span>Santanu Dutta</span>
          <span>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ducimus, reprehenderit.</span>
        </div>
      </div>
      

      <div className="middle">
        <div className="col">
          <span>Subscribe to get important updates</span>
          <input type="text" name="" id="" placeholder='YOUR EMAIL'/>
          <button type='submit'>SUBSCRIBE</button>
        </div>
      </div>

      <div className="right">
        <div className="col">
          <span>Follow us</span>
          <div className="icons">
            <FaDiscord className='icon'/>
            <FaInstagram className='icon'/>
            <FaFacebook className='icon'/>
          </div>
        </div>
      </div>

      <div className="left">
        <div className="col">
          <span>Call us</span>
          <span>+91 9999999999</span>
        </div>
      </div>
    </div>
  )
}

export default Footer