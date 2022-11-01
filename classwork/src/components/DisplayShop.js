import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayShop = ({
  img,
  title,
  price,
  rating,
  briefDesc,
  id,
  icon1,
  icon2,
  icon3,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="divContainer">
          <div className="divLeft">
          <img src={img} alt="" className="imgs"/>
          </div>
          <div className="divRight">
          <h4>{title}</h4>
          
          <div className="price-Rating">
      <span>{price}</span>
      <span>
        {rating} 
      </span>

          </div>
      <p className="text">{briefDesc}</p>
      <div className="icon">
      <span>{icon1}</span>
      <span>{icon2}</span>
      <span
        onClick={() => {
          // navigate("/products");
          navigate("/products/" + id);
        }}
      >
        {icon3}
      </span>
      </div>
            
          </div>
        </div>
      
      
    </div>
  );
};

export default DisplayShop;
