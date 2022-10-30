import React from "react";
import { CiStar } from "react-icons/ci";
import "../styles/Shop.css";
import Checkbox from "../Checkbox";
import DisplayShop from "../DisplayShop";
import Goods from "../AvailableProducts";

const ShowGoods = (itr, id) => {
  return (
    <DisplayShop
      title={itr.title}
      price={itr.price}
      rating={itr.rating}
      briefDesc={itr.briefDesc}
      key={id}
      id={id}
      icon1={itr.icon1}
      icon2={itr.icon2}
      icon3={itr.icon3}
      img={itr.img}
    />
  );
};
const images = (itr, id) => {
  return <DisplayShop id={id} key={id} />;
};
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
            <small style={{ fontSize: 12, display: "inline" }}>(233)</small>
          </div>
          <div className="cont">
            <input type="checkbox" className="rating" />
            <label htmlFor="checkbox" className="ratingLabel">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </label>
            <small style={{ fontSize: 12, display: "inline" }}>(233)</small>
          </div>
          <div className="cont">
            <input type="checkbox" className="rating" />
            <label htmlFor="checkbox" className="ratingLabel">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </label>
            <small style={{ fontSize: 12, display: "inline" }}>(233)</small>
          </div>
          <div className="cont">
            <input type="checkbox" className="rating" />
            <label htmlFor="checkbox" className="ratingLabel">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </label>
            <small style={{ fontSize: 12, display: "inline" }}>(233)</small>
          </div>
          <div className="cont">
            <input type="checkbox" className="rating" />
            <label htmlFor="checkbox" className="ratingLabel">
              <CiStar /> <CiStar /> <CiStar /> <CiStar /> <CiStar />
            </label>
            <small style={{ fontSize: 12, display: "inline" }}>(233)</small>
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
      <div className="col2">{Goods.map(ShowGoods)}</div>
    </div>
  );
};

export default Shop;
