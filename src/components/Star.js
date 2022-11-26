import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import "../components/styles/DetailedDesc.css";

const StarRate = () => {
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);

  return (
    <div className="star">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <BsStarFill
            className="star"
            onClick={() => {
              setRating(ratingValue);
            }}
            size={15}
            key={index}
            onMouseEnter={() => setHoverFill(ratingValue)}
            onMouseLeave={() => setHoverFill(null)}
            style={{
              color: ratingValue <= (hoverFill || rating) ? "#FFC416" : "#ccc",
            }}
            onChange={() => setRating(ratingValue)}
            value={ratingValue}
          />
        );
      })}
    </div>
  );
};

export default StarRate;
