import { useSearch } from "../contexts/Search";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
// import React, { useState } from 'react';
import '../CSS/SearchBar.css';

const SearchBar = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const [bedroomCount, setBedroomCount] = useState(0);

  const incrementBedroom = () => {
    setBedroomCount(bedroomCount + 1);
  };

  const decrementBedroom = () => {
    if (bedroomCount > 0) {
      setBedroomCount(bedroomCount - 1);
    }
  };

  const handleSubmit = async (e) => {   //always prevent default when working with forms
    e.preventDefault();
    try {
      const { data } = await axios.get(`/api/property/search/${values?.keyword}`);
      console.log(data);
      setValues({ ...values, results: data?.products });
      navigate("/search");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="search-bar" onSubmit={handleSubmit}>
      <div className="search-item search-item-location">
        <label htmlFor="location" className='location'>Location</label>
        <input type="text" id="location" placeholder="eg. Gbagada" onChange={(e) => setValues({ ...values, keyword: e.target.value })}/>
      </div>
      <div className="search-item search-item-props">
        <label htmlFor="property-type" className='property-type'>Property Type</label>
        <input type="text" id="property-type" placeholder="eg. Duplex, Bedroom Flat" onChange={(e) => setValues({ ...values, keyword: e.target.value })}/>
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
