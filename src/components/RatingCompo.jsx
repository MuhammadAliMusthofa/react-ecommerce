import React, { useState } from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleMouseEnter = (starIndex) => {
    setHoveredRating(starIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleClick = (starIndex) => {
    onRatingChange(starIndex);
  };

  const renderStar = (starIndex) => {
    const filled = (hoveredRating !== null ? hoveredRating : rating) >= starIndex;
    return (
      <span
        key={starIndex}
        className={`star ${filled ? 'filled' : ''}`}
        onMouseEnter={() => handleMouseEnter(starIndex)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(starIndex)}
      >
        ★
      </span>
    );
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => renderStar(index + 1))}
    </div>
  );
};

const ReviewComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>

      <p>Pilih rating:</p>
      <StarRating rating={rating} onRatingChange={handleRatingChange} />
      <p>Rating Anda: {rating}</p>
      {/*Tambahkan komponen ulasan lainnya di sini*/}
    </div>
  );
};

export default ReviewComponent;
