// src/components/SearchBar.js

import React, { useState } from 'react';
import '../CSS/SearchBar.css';

const SearchBar = () => {
  const [bedroomCount, setBedroomCount] = useState(0);

  const incrementBedroom = () => {
    setBedroomCount(bedroomCount + 1);
  };

  const decrementBedroom = () => {
    if (bedroomCount > 0) {
      setBedroomCount(bedroomCount - 1);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-item search-item-location">
        <label htmlFor="location" className='location'>Location</label>
        <input type="text" id="location" placeholder="eg. Gbagada" />
      </div>
      <div className="search-item search-item-props">
        <label htmlFor="property-type" className='property-type'>Property Type</label>
        <input type="text" id="property-type" placeholder="eg. Duplex, Bedroom Flat" />
      </div>
      <div className="search-item search-item-count">
        <label htmlFor="bedroom" className='bedroom'>Bedroom</label>
        <div className="bedroom-counter">
          <button className="decrement" onClick={decrementBedroom}>-</button>
          <span className="count">{bedroomCount}</span>
          <button className="increment" onClick={incrementBedroom}>+</button>
        </div>
      </div>
      <div className="search-button" role='button'>Find Property</div>
    </div>
  );
};

export default SearchBar;
