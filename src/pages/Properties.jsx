import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Houses from "../components/Houses";
import '../CSS/Properties.css'
import PopularProperties from "../components/PopularProperties";
import filterIcon from "../assets/Vectorfilter.png"

const Properties = () => {
  return (
    <div className="property-page">
      <Hero />
      <div className="filter-section container-main">
        <div className="filter-left">
          <div className="flex" style={{alignItems:"center"}}>
          <img src={filterIcon} alt="More filter" style={{height:"1rem"}} />
          <span>More filter</span>
          </div>
          
          <span>Showing 1-9 of 18 products</span>
        </div>
        
        <div className="sort-by">
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
