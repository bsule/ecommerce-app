import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index, fraction = 1) => {
    const newRating = index + fraction;
    setRating(newRating);
  };

  const calculatePercentage = (index) => {
    const fullStars = Math.floor(rating);
    const isCurrentStar = index === fullStars;
    const hasFraction = rating % 1 !== 0;
    return isCurrentStar && hasFraction ? (rating % 1) * 100 : index < fullStars ? 100 : 0;
  };

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => (
        <span key={index} style={{ position: 'relative', display: 'inline-block' }}>
          <Star
            filled={index < rating}
            onClick={() => handleClick(index, 1)}
            percentage={calculatePercentage(index)}
          />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex' }}>
            {[...Array(10)].map((_, fractionIndex) => (
              <div
                key={fractionIndex}
                style={{ flex: 1, cursor: 'pointer', height: '100%' }}
                onClick={() => handleClick(index, (fractionIndex + 1) / 10)}
              />
            ))}
          </div>
        </span>
      ))}
      <p>{rating.toFixed(1)} of {totalStars} stars</p>
    </div>
  );
};

export default StarRating;
