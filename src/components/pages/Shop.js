import React, { useState } from "react";
import "../styles/Shop.css";
import Checkbox from "../Checkbox";
import DisplayShop from "../DisplayShop";
import Goods from "../AvailableProducts";
import StarRate from "../Star";
import Header from "../Header";
import Footer2 from "../Footer2";
import Navbarr2 from "../Navbarr2";

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

const Shop = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Navbarr2 />
      <Header />
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
              <span
                onChange={() => {
                  setCount(count + 1);
                }}
              >
                <StarRate />
              </span>

              <small style={{ fontSize: 12, display: "inline" }}>{count}</small>
            </div>
            <div className="cont">
              <StarRate />

              <small style={{ fontSize: 12, display: "inline" }}>(233)</small>
            </div>
            <div className="cont">
              <StarRate />

              <small style={{ fontSize: 12, display: "inline" }}>(233)</small>
            </div>
            <div className="cont">
              <StarRate />

              <small style={{ fontSize: 12, display: "inline" }}>(233)</small>
            </div>
            <div className="cont">
              <StarRate />

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
      <Footer2 />
    </div>
  );
};

export default Shop;
