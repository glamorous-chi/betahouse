import "../../CSS/PropertyCard.css";
import { Link } from "react-router-dom";
import React from "react";
import linkIcon from "../../assets/Vectorlink.png";
import videoIcon from "../../assets/Vectorvideo.png";
import picIcon from "../../assets/Vectorpicture.png";
import locationIcon from "../../assets/Vectorlocation.png";
import bedicon from "../../assets/Vectorbedroom.png";
import bathicon from "../../assets/Vectorbathroom.png";
import swapIcon from "../../assets/Vectorswap.png";
import shareIcon from "../../assets/Vectorshare.png";
import heartIcon from "../../assets/Vectorfavourite.png";

const PropertyCard = ({property}) => {
  const {_id, image, name, location,price,bedroom,bathroom} = property;
  let formattedPrice = price.toLocaleString(undefined);
  return (
    <Link to={`/detail/${_id}`}>
      <div className="property-card container-main" key={_id}>
      <div className="property-background-image" style={{ backgroundImage: `url(${image.url})`}}>
        <div className="property-card-header flex-justify-content">
          <span className="featured">Featured</span>
          <span className="for-sale">For Sale</span>
        </div>
        <div className="property-card-icons">
          <span>
            <img src={linkIcon} alt="link" />
          </span>
          <span>
            <img src={videoIcon} alt="video" />
          </span>
          <span>
            <img src={picIcon} alt="picture" />
          </span>
        </div>
      </div>
      <div className="property-card-body">
        <h3>{name}</h3>
        <div className="flex-hero">
          <img src={locationIcon} alt="location" />
          <span>{location}</span>
        </div>
        <div className="property-details">
          <div className="detail-item flex-hero">
            <img src={bedicon} alt="bedroom" />
            <span><span>{bedroom}</span> Bedrooms</span>
          </div>
          <div className="detail-item flex-hero">
            <img src={bathicon} alt="bathroom" />
            <span><span>{bathroom} Bathrooms</span></span>
          </div>
        </div>
      </div>
      <div className="property-card-footer">
        <div className="price">&#x20A6;{formattedPrice}</div>
        <div className="icons">
          <img src={swapIcon} alt="Swap" />
          <img src={shareIcon} alt="Share" />
          {/* <div className="favourite"></div> */}
          <img src={heartIcon} alt="Favorite" className="favourite"/>
        </div>
      </div>
    </div>
    </Link>
    
  );
};

export default PropertyCard;
