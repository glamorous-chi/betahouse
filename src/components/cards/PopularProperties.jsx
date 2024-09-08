import React from 'react';
import LazyLoad from 'react-lazy-load';

const PopularPropertiesCard = ({ img }) => {
  return (
    <div className="image-card">
      <LazyLoad>
      <img src={img} alt="Home" />
      </LazyLoad>
    </div>
  );
};

export default PopularPropertiesCard;
