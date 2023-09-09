import React from 'react'
import './SingleProduct.scss'
import RelatedProducts from './RelatedProduct/RelatedProducts'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus} from 'react-icons/fa'
import prod from '../../assets/products/earbuds-prod-5.webp'

const SingleProduct = () => {
  return (
    <div className='single-product-main-content'>
      <div className="layout">
        <div className="single-product-page">

          <div className="left">
              <img src={prod} alt="" />
          </div>

          <div className="right">
            <span className="name">boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver</span>
            <span className="price">2999/-</span>
            <span className="desc">There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that. Feel the power rising up in your veins as you indulge in your playlist with its 40mm dynamic drivers. Make adaptiveness your superpower just like the adaptive headband of Rockerz 450. Get ready to rule with #DCYou.</span>

              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span>-</span>
                  <span>5</span>
                  <span>+</span>
                </div>
                <button className='add-to-cart-button'> <FaCartPlus size={20}/> Add to Cart</button>
              </div>
              <span className='divider'></span>
              <div className="info-item">
                <span className='text-bold'>
                  Category:
                <span className=''>Headphone</span>
                </span>
                <span className='text-bold'>
                  Share:
                <span className='social-icon'>
                    <FaFacebookF size={16}/>
                    <FaTwitter size={16}/>
                    <FaInstagram size={16}/>
                    <FaLinkedinIn size={16}/>
                    <FaPinterest size={16}/>
                </span>
                </span>
               
              </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  )
}

export default SingleProduct
