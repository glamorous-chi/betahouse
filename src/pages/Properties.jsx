import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Houses from "../components/Houses";
import PopularProperties from "../components/PopularProperties";
import filterIcon from "../assets/Vectorfilter.png"

const Properties = () => {
  return (
    <div className="property-page">
      <Hero />
      <div className="filter-section container-main">
        <div className="filter-left">
          <img src={filterIcon} alt="More filter" />
          <span>More filter</span>
          <span>Showing 1-10 of 15 products</span>
        </div>
        
        <div>
          <span>Sort by:</span>
          <select name="sorty by" id="sort-by">
            <option value="Price">Price</option>
            <option value="Type">Type</option>
            <option value="location">Location</option>
          </select>
        </div>
        
      </div>
      
      <Houses />
      <PopularProperties/>
      <Footer />
    </div>
  );
};

export default Properties;
