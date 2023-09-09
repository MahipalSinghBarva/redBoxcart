import React from 'react'
import './Categorys.scss'
import Products from '../Product/Products'


const Categorys = () => {

  

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category Title</div>
          <Products innerPage={true}/>
      </div>
    </div>
  )
}

export default Categorys
