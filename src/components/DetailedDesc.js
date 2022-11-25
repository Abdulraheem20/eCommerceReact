import Goods from "../components/AvailableProducts";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./styles/DetailedDesc.css";
import StarRate from "./Star";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Header from "./Header";
// import Navbarr2 from "./Navbarr2";

import Footer2 from "./Footer2";
import Navbarr2 from "./Navbarr2";

const DetailedDesc = () => {
  const { id } = useParams();
  const itr = Goods[id];
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };
  const showDetails = () => {
    setDetail(!detail);
  };
  const [data, setData] = useState({
    name: "",
    rating: "",
    msg: "",
    key: { id },
  });

  return (
    <div>
      <Navbarr2 />
      <Header />
      <div className="container1">
        {" "}
        <br /> <br />
        <div className="linksss">
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
              <img src={itr.img} alt="img" />
              <img src={itr.img} alt="img" />
              <img src={itr.img} alt="img" />
            </div>
            <div className="bigImg">
              <img src={itr.img} alt="img" />
            </div>
          </div>
          <div className="right">
            <h3>{itr.title}</h3> <br />
            <div className="ratingReview">
              <div>
                <StarRate />
              </div>{" "}
              <br />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  showHandler();
                }}
              >
                Add Review
              </button>
            </div>
            <p style={{ color: "#151875" }}>{itr.price}</p> <br />
            <p style={{ color: "##A9ACC6" }}>{itr.briefDesc}</p> <br />
            <div className="btns">
              <button className="AddCartBtn">
                <AiOutlineShoppingCart /> Add to Cart
              </button>
              <button className="FavoriteBtn">
                <FaRegHeart /> Favorite
              </button>
            </div>{" "}
            <br />
            <h5 style={{ color: "#151875" }}>Categories: furniture, wood</h5>
            <div className="share">
              <h5 style={{ color: "#151875" }}>Share</h5>
              <span>
                <a href="https://web.facebook.com/raimit2">
                  <FaFacebookSquare style={{ color: "#151875" }} />
                </a>
                <a href="https://www.instagram.com/a2z_technology/">
                  <FaInstagramSquare
                    style={{ color: "#FB2E86", marginLeft: "10px" }}
                  />
                </a>
                <a href="https://twitter.com/">
                  <FaTwitterSquare
                    style={{ color: "#151875", marginLeft: "10px" }}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className={show ? "reviewModal" : "hidden"}>
          <h2>Add review</h2>
          <div className="inputName">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="inputN"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </div>
          <div className="inputName">
            <label htmlFor="rating">Rating</label>
            <span>
              <StarRate
                value={data.rating}
                onChange={(e) => {
                  setData({ ...data, rating: e.target.value });
                }}
              />
            </span>
          </div>
          <div className="inputName">
            <label htmlFor="rating">Rating</label>
            <textarea
              name="review"
              id=""
              cols="30"
              rows="10"
              value={data.msg}
              onChange={(e) => {
                setData({ ...data, msg: e.target.value });
              }}
            >
              Review
            </textarea>
          </div>
          <div className="subCloseBtn">
            <button
              className="subBtn"
              onClick={(e) => {
                e.preventDefault();
                console.log(
                  `Name: ${data.name}; Message: ${data.msg} Rating: ${data.rating}`
                );
                showHandler();
              }}
            >
              Submit
            </button>
            <button
              className="closeBtn"
              onClick={(e) => {
                e.preventDefault();
                showHandler();
              }}
            >
              Close
            </button>
          </div>
        </div>{" "}
        <br />
      </div>
      <div className="container2">
        <div className="links1">
          <h3
            className={detail ? "links1h3" : "none"}
            onClick={() => {
              showDetails();
            }}
          >
            Description
          </h3>
          <h3
            className={detail ? "links1h3" : "none"}
            onClick={() => {
              showDetails();
            }}
          >
            Additional Info
          </h3>
          <h3
            className={detail ? "links1h3" : "none"}
            onClick={() => {
              showDetails();
            }}
          >
            Reviews
          </h3>
        </div>
        <div className={detail ? "texts" : "hidden"}>
          <h3>{itr.title}</h3> <br />
          <p>{itr.desc}</p> <br />
          <h3>{itr.heading}</h3> <br />
          <p>{itr.moreDetails}</p>
          <br />
        </div>{" "}
        <br />
      </div>
      <Footer2 />
      <div id={show ? "overlay" : "none"}></div>
    </div>
  );
};

export default DetailedDesc;
