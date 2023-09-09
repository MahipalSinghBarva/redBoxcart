import React from 'react'
import BannerImg from '../../../assets/banner-img.png'
import './Banner.scss'
import {useNavigate} from 'react-router-dom'

const Banner = () => {

  const navigate = useNavigate()

  return (
    <div className='hero-banner'>
        <div className="content">
        <div className='text-content'>
            <h1>Sale</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione repellat eveniet accusamus quos dolor laboriosam recusandae facere fugit voluptatem in nemo, aperiam eos suscipit, rerum aliquid vel quisquam. Dolor.</p>
            <div className="cats">
                <div className='banner-cta'onClick={()=>navigate('/readmore')}>Red More</div>
                <div className='banner-cta v2'onClick={()=>navigate('/shopnow')}>Shop Now</div>
            </div>
            
        </div>
        <img src={BannerImg} alt='' />
        </div>
    </div>
  )
}

export default Banner
