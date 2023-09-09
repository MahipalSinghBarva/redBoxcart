import React from 'react'
import prod from '../../../assets/products/earbuds-prod-1.webp'
import prod1 from '../../../assets/products/earbuds-prod-2.webp'
import prod2 from '../../../assets/products/headphone-prod-1.webp'
import prod3 from '../../../assets/products/speaker-prod-1.webp'
import prod4 from '../../../assets/products/watch-prod-1.webp'
import prod5 from '../../../assets/products/speaker-prod-5.webp'
import prod6 from '../../../assets/products/headphone-prod-2.webp'
import prod7 from '../../../assets/products/watch-prod-2.webp'
import {useNavigate} from 'react-router-dom'
import './Product.scss'


const Product = () => {

  const navigate = useNavigate()

  return (
    <>

    <div className='product-card' onClick={()=>navigate(`/product/1`)}>
      <div className="thumbnail">
        <img src={prod} alt="" />
      </div>
      <div className="prod-deatils">
        <span className='name'>Eare Buds</span>
        <span className='price'>&#8377;4999/-</span>
      </div>
    </div>

    <div className='product-card' onClick={()=>navigate('/product/1')}>
      <div className="thumbnail">
        <img src={prod1} alt="" />
      </div>
      <div className="prod-deatils">
        <span className='name'>WireLess Buds</span>
        <span className='price'>&#8377;5990/-</span>
      </div>
    </div>

    <div className='product-card' onClick={()=>navigate(`/product/1`)}>
      <div className="thumbnail">
        <img src={prod2} alt="" />
      </div>
      <div className="prod-deatils">
        <span className='name'>WireLess Headphone</span>
        <span className='price'>&#8377;6549/-/-</span>
      </div>
    </div>

    <div className='product-card' onClick={()=>navigate(`/product/1`)}>
      <div className="thumbnail">
        <img src={prod3} alt="" />
      </div>
      <div className="prod-deatils">
        <span className='name'>Party Spekar</span>
        <span className='price'>&#8377;7569/-</span>
      </div>
    </div>

    <div className='product-card' onClick={()=>navigate(`/product/1`)}>
      <div className="thumbnail">
        <img src={prod4} alt="" />
      </div>
      <div className="prod-deatils">
        <span className='name'>Smart Watch</span>
        <span className='price'>&#8377;3500/-</span>
      </div>
    </div>

    <div className='product-card' onClick={()=>navigate(`/product/1`)}>
      <div className="thumbnail">
        <img src={prod5} alt="" />
      </div>
      <div className="prod-deatils">
        <span className='name'>Bluetooth Spekar</span>
        <span className='price'>&#8377;1199/-</span>
      </div>
    </div>

    <div className='product-card' onClick={()=>navigate(`/product/1`)}>
      <div className="thumbnail">
        <img src={prod6} alt="" />
      </div>
      <div className="prod-deatils">
        <span className='name'>Red Headphone</span>
        <span className='price'>&#8377;8999/-</span>
      </div>
    </div>

    <div className='product-card' onClick={()=>navigate(`/product/1`)}>
      <div className="thumbnail">
        <img src={prod7} alt="" />
      </div>
      <div className="prod-deatils">
        <span className='name'>Watch</span>
        <span className='price'>&#8377;6999/-</span>
      </div>
    </div>


    </>
  )
}

export default Product
