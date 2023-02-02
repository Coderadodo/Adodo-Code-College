import React from 'react'
import './Footer.scss';


const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare Prices</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Harum recusandae voluptates doloribus, eius, vel amet
              voluptate pariatur numquam sunt ut molestiae eveniet
               obcaecati fugiat cupiditate alias? Tempora quisquam 
               accusantium itaque.
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
        <span> Plot 30B Vancouver Drive
          <h4>Vancouver Canada</h4> 
            +1689025790-2
            E-mail: adodofamily@gmail.adodo</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Adodo Industrial</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
       
        <div className="right">
            <div className='vic'>
            <h3>We Accept Payment</h3>
          <img src="/img/payment.jpg" alt="payment cards" />
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Footer