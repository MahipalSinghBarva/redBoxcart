import React from 'react'
import './Search.scss'
import {MdClose} from'react-icons/md'
import prod from '../../../assets/products/watch-prod-1.webp'

const Search = ({setShowSearch}) => {
  return (
    <div className='search-model'>
      <div className="form-field">
      <input type="text" autoFocus placeholder='Search you want'/>
      <MdClose className='close-btn' onClick={()=>setShowSearch(false)}/>
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>
              <div className="prod-detils">
                <span className='name'>Product Name</span>
                <span className='desc'>Product Desc</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
