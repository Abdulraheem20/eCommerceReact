import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import "../components/styles/Navbarr.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbarr = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="navbar">
        <nav>
          <div className="row">
            <div className="col">
              <div className="logo">
                <h1>
                  The<span className="Shop">Shop</span>
                </h1>
              </div>
              <div className="links">
                <ul className="navLinks">
                  <li className="nav-link">
                    <NavLink to="/" style={{textDecoration: 'none'}}>Home</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/products" style={{textDecoration: 'none'}}>Products</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/blog" style={{textDecoration: 'none'}}>Blog</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/shop" style={{textDecoration: 'none'}}>Shop</NavLink>
                  </li>
                  <li className="nav-link">
                    <NavLink to="/contact" style={{textDecoration: 'none'}}>Contact</NavLink>
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
                <CgProfile />
                <AiOutlineShoppingCart 
                onClick={()=>{
                  navigate('/ShoppingCart')
                }}/>
                <FaRegHeart />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbarr;
