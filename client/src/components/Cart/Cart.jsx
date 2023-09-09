import React from 'react'
import './Cart.scss'
import {MdClose} from 'react-icons/md'
import {BsCartX} from 'react-icons/bs'
import Cartltem from './Cartltem/Cartltem'

const Cart = ({setshowCart}) => {
  return (
    <div className='cart-panel'>
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className='heading'>Shopping Cart</span>
          <span className='close-btn' onClick={()=>setshowCart(false)}><MdClose/></span>
          <span className='text'>Close</span>
        </div>

        {/* <div className="empty-cart">
          <BsCartX/>
          <span>No item in the CART</span>
          <button className='return-cta'>Return to Buy</button>
        </div> */}

        <>
          <Cartltem/>
          <div className="cart-fotter">
            <div className="subtotal">
              <span className='text'>Subtotal:</span>
              <span className='text total'>&#8377;1234</span>
            </div>
            <div className="button">
              <button className='checkout-cta'>Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Cart
