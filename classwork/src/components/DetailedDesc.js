import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/DetailedDesc.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const DetailedDesc = () => {
  return (
    <div>
      <div className="container1">
        <div className="links">
          <NavLink to="/" style={{ textDecoration: "none" }} className="linkss">
            Home
          </NavLink>
          <NavLink
            to="/Shop"
            style={{ textDecoration: "none" }}
            className="linkss"
          >
            .Shop
          </NavLink>
          <NavLink to="#" style={{ textDecoration: "none" }} className="linkss">
            .Good tittle
          </NavLink>
        </div>
        <div className="displayGood">
          <div className="left">
            <div className="smallImg">
              <img src="../images/Rectangle 134.png" alt="img" />
              <img src="../images/Rectangle 136.png" alt="img" />
              <img src="../images/Rectangle 137.png" alt="img" />
            </div>
            <div className="bigImg">
              <img src="../images/Rectangle 138.png" alt="img" />
            </div>
          </div>
          <div className="right">
            <h3>Playwood arm chair</h3> <br />
            <div className="ratingReview">
              <div>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <span>
                  <small>(22)</small>
                </span>
              </div> <br />
              <button>Add Review</button>
            </div>
            <p>€32.00</p> <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p> <br />
            <div className="btns">
              <button className="AddCartBtn">
                <AiOutlineShoppingCart /> Add to Cart
              </button>
              <button className="FavoriteBtn">
                <FaRegHeart /> Favorite
              </button>
            </div> <br />
            <h5>Categories: furniture, wood</h5>
            <div className="share">
              <p>Share</p>
              <span>
                <a href="">
                  <FaFacebookSquare style={{ color: "#151875" }} />
                </a>
                <a href="">
                  <FaInstagramSquare
                    style={{ color: "#FB2E86", marginLeft: "10px" }}
                  />
                </a>
                <a href="">
                  <FaTwitterSquare
                    style={{ color: "#151875", marginLeft: "10px" }}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedDesc;
