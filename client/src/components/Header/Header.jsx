import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Header.scss";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate()

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
      <div className="header-content">
        <ul className="left">
          <li onClick={()=>navigate('/')} className="homebtn">Home</li>
          <li onClick={()=>navigate('/about')} className="aboutbtn">About</li>
          <li onClick={()=>navigate('/categories')} className="catbtn">Categories</li>
        </ul>

        <div className="center" onClick={()=>navigate('/')}>
          <span className="r">r</span>edBox <span className="c">c</span>art
        </div>
        <div className="right">
          <TbSearch className="searchbtn" onClick={()=> setShowSearch(true)}/>
          <AiOutlineHeart className="heartbtn" onClick={()=>navigate('/likedproduct')}/>
          <span className="cart-icon" onClick={()=> setshowCart(true)}>
            <CgShoppingCart className="cartbtn"/>
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
    {showCart && <Cart setshowCart={setshowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  );
};

export default Header;
