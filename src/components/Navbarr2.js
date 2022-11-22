import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import "../components/styles/Navbarr.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbarr2 = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="navbar2">
        <nav>
          <div className="row">
            <div className="col">
              <div className="logo">
                <h1>
                  The<span className="Shop2">Shop</span>
                </h1>
              </div>
              <div className="links">
                <ul className="navLinks2">
                  <li className="nav-link">
                    <NavLink to="/" style={{textDecoration: 'none'}} className="NavLink">Home</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/products" style={{textDecoration: 'none'}} className="NavLink">Products</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/blog" style={{textDecoration: 'none'}} className="NavLink">Blog</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/shop" style={{textDecoration: 'none'}} className="NavLink">Shop</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/contact" style={{textDecoration: 'none'}} className="NavLink">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <form className="input">
                <input type="text" className="searchInput" />
                <button>
                  <CiSearch />
                </button>
              </form>
              <div className="icons">
                <CgProfile className="profileIcon2" />
                <AiOutlineShoppingCart
                className="cartIcon2" 
                onClick={()=>{
                  navigate('/ShoppingCart')
                }}/>
                <FaRegHeart className="heartIcon2" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbarr2;
