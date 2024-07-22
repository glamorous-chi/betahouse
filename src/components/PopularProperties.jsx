import React, { useState } from 'react';
import { data } from '../DB/PopularProperties';
import '../CSS/popularProperties.css';
import PopularPropertiesCard from '../components/cards/PopularProperties';

const PopularProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftButtonClicked, setLeftButtonClicked] = useState(false);
  const [rightButtonClicked, setRightButtonClicked] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
    setRightButtonClicked(true);
    setTimeout(() => setRightButtonClicked(false), 200); // Reset after 200ms
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
    setLeftButtonClicked(true);
    setTimeout(() => setLeftButtonClicked(false), 200); // Reset after 200ms
  };

  return (
    <>
      <h1 className="fw-600 discover-heading">Discover our Popular Properties</h1>
      <div className="carousel-container">
        <div
          className={`arrow left-arrow ${leftButtonClicked ? 'active' : ''}`}
          onClick={goToPrevious}
        >
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
        <div
          className={`arrow right-arrow ${rightButtonClicked ? 'active' : ''}`}
          onClick={goToNext}
        >
          &#8594;
        </div>
      </div>
    </>
  );
};

export default PopularProperties;
