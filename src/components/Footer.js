import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import "../components/styles/Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="theShop">
        <h1>
          The<span className="shop">Shop</span>
        </h1>
        <form className="email">
          <input
            type="email"
            placeholder="Enter Email Address"
            className="emailInput"
          />
          <button className="signUpBtn">Sign up</button>
        </form>
      </div>
      <div className="categories">
        <h4 style={{color: 'white'}}>Categories</h4> <br />
        <p>
          <small>Laptops & Computers</small>
        </p>
        <p>
          <small>Cameras & Photography</small>
        </p>
        <p>
          <small>Smart Phones & Tablets</small>
        </p>
        <p>
          <small>Video Games & Consoles</small>
        </p>
        <p>
          <small>Waterproof Headphones</small>
        </p>
      </div>
      <div className="myAccount">
        <h4 style={{color: 'white'}}>My account</h4> <br />
        <p>
          <small>My Account</small>
        </p>
        <p>
          <small>Discount</small>
        </p>
        <p>
          <small>Returns</small>
        </p>
        <p>
          <small>Orders History</small>
        </p>
        <p>
          <small>Order Tracking</small>
        </p>
      </div>
      <div className="followUs">
        <h4 style={{color: "white"}}>Follow us</h4>
        <br />
        <a href="https://web.facebook.com/raimit2" >
          <FaFacebookSquare style={{ color: "white" }} />
        </a>
        <a href="https://www.instagram.com/a2z_technology/" >
          <FaInstagramSquare style={{ color: "white", marginLeft: '10px' }} />
        </a>
        <a href="https://twitter.com/TechnologyA2z">
          <FaTwitterSquare style={{ color: "white", marginLeft: '10px' }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
