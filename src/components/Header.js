import React from "react";
import leftLayer from "../images/hanen-souhail-F5EO6OD9kBo-unsplash 2.png";
import pics from "../images/hanen-souhail-F5EO6OD9kBo-unsplash 1.png";
import rightLayer from "../images/hanen-souhail-F5EO6OD9kBo-unsplash 3.png";
import "../components/styles/Header.css";
// import Navbarr from './Navbarr'

const Header = () => {
  return (
    <div>
      <div className="headerBg">
        {/* <Navbarr/> */}
        <div className="col">
          <h1 className="h1">
            Products for every need, at the distance of a click.
          </h1>
        </div>
        <div className="image">
          <img src={leftLayer} alt="img" className="leftLayer" />
          <img src={pics} alt="img" className="pics" />
          <img src={rightLayer} alt="img" className="rightLayer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
