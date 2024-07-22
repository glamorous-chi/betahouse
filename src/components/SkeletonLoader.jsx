import React from 'react';
import "../CSS/PropertyCard.css";

const SkeletonLoader = () => {
  return (
    <div className="property-card container-main skeleton-card">
      <div className="skeleton-image"></div>
      <div className="property-card-body">
        <div className="skeleton skeleton-text"></div>
        <div className="flex-hero">
          <div className="skeleton skeleton-small-text"></div>
        </div>
        <div className="property-details">
          <div className="detail-item flex-hero">
            <div className="skeleton skeleton-icon"></div>
            <div className="skeleton skeleton-small-text"></div>
          </div>
          <div className="detail-item flex-hero">
            <div className="skeleton skeleton-icon"></div>
            <div className="skeleton skeleton-small-text"></div>
          </div>
        </div>
      </div>
      <div className="property-card-footer">
        <div className="skeleton skeleton-text"></div>
        <div className="icons">
          <div className="skeleton skeleton-icon"></div>
          <div className="skeleton skeleton-icon"></div>
          <div className="skeleton skeleton-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
