import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import '../components/styles/DetailedDesc.css'

const StarRate = () => {
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);
const [check, setCheck] = useState(false)

const attrb = ()=>{
    return (!check)
}
  return (
    <div className="star">
        <input type="checkbox" className="rating"  onClick={()=>{
            
        }} />
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
       
            <BsStarFill
            className="star"
              onClick={() => setRating(ratingValue)}
              size={15}
              style={{
                color:
                  ratingValue <= (hoverFill || rating) ? "#FFC416" : "#ccc",
              }}
            //   onChange={() => setRating(ratingValue)}
            //   value={ratingValue}
            />
    
        );
      })}
    </div>
  );
};

export default StarRate;