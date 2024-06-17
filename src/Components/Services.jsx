import React from 'react'
import './Services.css'
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
  return (
    <div className='Services-Container'>
        <div className="Services Services-left color">
            <FaTruckFast className='icon'/>
            <span>Super fast and free delivery</span>
        </div>
        <div className="Services Services-middle">
            <div className="Services-middle-elements">
            <MdOutlineSecurity className='icon'/>
            <span>Non-contact Shipping</span>
            </div>
            <div className="Services-middle-elements">
            <GiReceiveMoney className='icon'/>
            <span>Money-Back Guaranteed</span>
            </div>
        </div>
        <div className="Services Services-right color">
        <RiSecurePaymentLine className='icon'/>
        <span>Super Secure Payment System</span>
        </div>
    </div>
  )
}

export default Services