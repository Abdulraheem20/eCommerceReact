import React from "react";
import { CiStar } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import "../styles/Shop.css";
import image1 from "../pages/Rectangle 32.png";
import Checkbox from "../Checkbox";

const Shop = () => {
  return (
    <div className="colContainer">
      <div className="col1">
        <div className="categorie">
          <p>Categories</p> <br />
          <Checkbox name="Prestashop" />
          <Checkbox name="Magento" />
          <Checkbox name="Bigcommerce" />
          <Checkbox name="osCommerce" />
          <Checkbox name="3dcart" />
          <Checkbox name="Bags" />
          <Checkbox name="Accessories" />
          <Checkbox name="Jewellery" />
          <Checkbox name="Watches" />
        </div>
        <br /> <br />
        <div className="ratings">
          <p>Rating Item</p>
          <div className="cont">
            <input type="checkbox" className="rating" />
            <label htmlFor="checkbox" className="ratingLabel">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </label>
            <small style={{fontSize: 12,display: 'inline'}} >(233)</small>
          </div>
          <div className="cont">
            <input type="checkbox" className="rating" />
            <label htmlFor="checkbox" className="ratingLabel">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </label>
            <small style={{fontSize: 12,display: 'inline'}} >(233)</small>
          </div>
          <div className="cont">
            <input type="checkbox" className="rating" />
            <label htmlFor="checkbox" className="ratingLabel">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </label>
            <small style={{fontSize: 12,display: 'inline'}} >(233)</small>
          </div>
          <div className="cont">
            <input type="checkbox" className="rating" />
            <label htmlFor="checkbox" className="ratingLabel">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </label>
            <small style={{fontSize: 12,display: 'inline'}} >(233)</small>
          </div>
          <div className="cont">
            <input type="checkbox" className="rating" />
            <label htmlFor="checkbox" className="ratingLabel">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </label>
            <small style={{fontSize: 12,display: 'inline'}} >(233)</small>
          </div>
        </div>
        <br /> <br />
        <div className="price-filter">
          <p>Price Filter</p>
          <div className="cont">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="checkbox" className="checkboxPriceFilter">
              €0.00 - €150.00
            </label>
          </div>
          <div className="cont">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="checkbox" className="checkboxPriceFilter">
              €150.00 - €350.00
            </label>
          </div>
          <div className="cont">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="checkbox" className="checkboxPriceFilter">
              €150.00 - €504.00
            </label>
          </div>
          <div className="cont">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="checkbox" className="checkboxPriceFilter">
              €450.00 +
            </label>
          </div>
        </div>
      </div>
      <div className="col2">
        <div className="divContainer">
          <div className="divLeft">
            <img src={image1} alt="image" className="imgs" />
          </div>
          <div className="divRight">
            <div className="lists">
              <h4>Dictum morbi</h4>
              <div className="price-Rating">
                <span>€26.00</span>
                <span>
                  <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                </span>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est <span></span>
                </p>
              </div>
              <div className="icon">
                <AiOutlineShoppingCart /> <FaRegHeart /> <FaSearchPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="divContainer">
          <div className="divLeft">
            <img src={image1} alt="image" className="imgs" />
          </div>
          <div className="divRight">
            <div className="lists">
              <h4>Dictum morbi</h4>
              <div className="price-Rating">
                <span>€26.00</span>
                <span>
                  <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                </span>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est <span></span>
                </p>
              </div>
              <div className="icon">
                <AiOutlineShoppingCart /> <FaRegHeart /> <FaSearchPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="divContainer">
          <div className="divLeft">
            <img src={image1} alt="image" className="imgs" />
          </div>
          <div className="divRight">
            <div className="lists">
              <h4>Dictum morbi</h4>
              <div className="price-Rating">
                <span>€26.00</span>
                <span>
                  <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                </span>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est <span></span>
                </p>
              </div>
              <div className="icon">
                <AiOutlineShoppingCart /> <FaRegHeart /> <FaSearchPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="divContainer">
          <div className="divLeft">
            <img src={image1} alt="image" className="imgs" />
          </div>
          <div className="divRight">
            <div className="lists">
              <h4>Dictum morbi</h4>
              <div className="price-Rating">
                <span>€26.00</span>
                <span>
                  <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                </span>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est <span></span>
                </p>
              </div>
              <div className="icon">
                <AiOutlineShoppingCart /> <FaRegHeart /> <FaSearchPlus />
              </div>
            </div>
          </div>
        </div>
        <div className="divContainer">
          <div className="divLeft">
            <img src={image1} alt="image" className="imgs" />
          </div>
          <div className="divRight">
            <div className="lists">
              <h4>Dictum morbi</h4>
              <div className="price-Rating">
                <span>€26.00</span>
                <span>
                  <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
                </span>
              </div>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est <span></span>
                </p>
              </div>
              <div className="icon">
                <AiOutlineShoppingCart /> <FaRegHeart /> <FaSearchPlus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
