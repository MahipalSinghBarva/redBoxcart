import React from 'react'
import {MdClose} from 'react-icons/md'
import prod from '../../../assets/products/speaker-prod-3.webp'
import './CartItem.scss'

const Cartltem = () => {
  return (
    <div className='cart-product'>
      <div className="cart-product">
        <div className="img-containor">
          <img src={prod} alt="" />
        </div>
        <div className="prod-details">
          <span className='name'>Product Name</span>
          <MdClose className='close-btn'/>
          <div className="quantity-buttons">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className='highlight'>&#8377; : 200</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartltem
