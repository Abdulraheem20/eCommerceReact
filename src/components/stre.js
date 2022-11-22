import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRa = () => {
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);
  const [ratingValue, setRatingValue] = useState(1,2,3,4,5)

  return (
    <div className="star">
      {/* {[...Array(5)].map((_, index) => {

        return (
        
            <FaStar
              key={index}
              onMouseEnter={() => setHoverFill(ratingValue)}
              onMouseLeave={() => setHoverFill(null)}
              size={100}
              style={{
                color:
                  ratingValue <= (hoverFill || rating) ? "#ffe101" : "#ccc",
              }}
              onChange={() => setRating(ratingValue)}
              value={ratingValue}
            />
        
        );
      })} */}
      <FaStar
      
            //   key={index}
              onMouseEnter={() => setHoverFill(ratingValue)}
              onMouseLeave={() => setHoverFill(null)}
              size={100}
              style={{
                color:
                  ratingValue <= (hoverFill || rating) ? "#ffe101" : "#ccc",
              }}
              onChange={() => setRating(ratingValue)}
              value={ratingValue}
            />
    </div>
  );
};

export default StarRa;
