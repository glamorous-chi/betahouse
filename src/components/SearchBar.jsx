import { useSearch } from "../contexts/Search";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import '../CSS/SearchBar.css';

const SearchBar = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [bedroomCount, setBedroomCount] = useState(0);

  const incrementBedroom = () => {
    setBedroomCount(bedroomCount + 1);
  };

  const decrementBedroom = () => {
    if (bedroomCount > 0) {
      setBedroomCount(bedroomCount - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const terms = [location, type].filter(term => term).join(',');
    try {
      const { data } = await axios.get(`/api/property/search?terms=${terms}`);
      console.log(data);
      setValues({ ...values, results: data?.properties });
      navigate("/search");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-item search-item-location">
        <label htmlFor="location" className='location'>Location</label>
        <input
          type="text"
          id="location"
          placeholder="e.g., Gbagada"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="search-item search-item-props">
        <label htmlFor="property-type" className='property-type'>Property Type</label>
        <input
          type="text"
          id="property-type"
          placeholder="e.g., Duplex, Bedroom Flat"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div className="search-item search-item-count">
        <label htmlFor="bedroom" className='bedroom'>Bedroom</label>
        <div className="bedroom-counter">
          <button type="button" className="decrement" onClick={decrementBedroom}>-</button>
          <span className="count">{bedroomCount}</span>
          <button type="button" className="increment" onClick={incrementBedroom}>+</button>
        </div>
      </div>
      <button className="search-button" type="submit">Find Property</button>
    </form>
  );
};

export default SearchBar;
