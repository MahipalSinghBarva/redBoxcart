import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <fotter className="fotter">
      <div className="fotter-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            aperiam consequatur impedit reprehenderit officia necessitatibus
            dolor dicta, repudiandae illo ipsam veritatis quidem incidunt,
            soluta, aliquam reiciendis vero sequi consectetur mollitia!
          </div>
        </div>
        <div className="col">
          <div className="title">Content</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">02h0 Tilak Road Bhilwara Raj. 311001</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Ph. 0000000000</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Mail Us: redboxcart@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphone</span>
          <span className="text">Smart Watch</span>
          <span className="text">Laptop</span>
          <span className="text">Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectore</span>
        </div>
        <div className="col">
          <div className="title">Page</div>
          <span className="text">Home</span>
          <span className="text">About Us</span>
          <span className="text">T&C</span>
          <span className="text">Return</span>
          <span className="text">Content Us</span>
          <span className="text">Privacy Policy</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottombar-content">
          <div className="text">redbox cart 2023 created by Mahipal Singh</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </fotter>
  );
};

export default Footer;
