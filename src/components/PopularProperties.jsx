import React, { useState } from 'react';
import { data } from '../DB/PopularProperties';
import '../CSS/popularProperties.css';
import PopularPropertiesCard from '../components/cards/PopularProperties';

const PopularProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="arrow left-arrow" onClick={goToPrevious}>
      &#8592;
      </div>
      <div className="image-gallery">
        {data.map((item, index) => (
          <div
            className={`image-card ${
              index === currentIndex ? 'active' : ''
            }`}
            key={item.id}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: 'transform 0.5s ease',
            }}
          >
            <PopularPropertiesCard img={item.img} />
          </div>
        ))}
      </div>
      <div className="arrow right-arrow" onClick={goToNext}>
      &#8594;
      </div>
    </div>
  );
};

export default PopularProperties;
