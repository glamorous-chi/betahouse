// SkeletonLoader.js
import React from "react";
import "../CSS/SkeletonLoader.css"; // Adjust the path as necessary

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-background"></div>
      <div className="skeleton-content">
        <div className="skeleton-line"></div>
        <div className="skeleton-line short"></div>
        <div className="skeleton-line"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
