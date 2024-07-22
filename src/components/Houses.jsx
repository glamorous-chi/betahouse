import React, { useState, useEffect } from "react";
import PropertyCard from './cards/PropertyCard';
import "../CSS/Houses.css";
import axios from 'axios';
import SkeletonLoader from "../components/SkeletonLoader";

const Houses = () => {
  const [fetchProperties, setFetchProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/property/all`);
      setFetchProperties(response?.data?.properties);  // Assuming the response structure has 'properties'
      console.log(response?.data?.properties);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className='property-cards container-main'>
      {loading ? (
        <>
        <SkeletonLoader/>
       <SkeletonLoader/>
       <SkeletonLoader/>
       <SkeletonLoader/>
       <SkeletonLoader/>
       <SkeletonLoader/>
        </>
       
      ) : (
        fetchProperties.map((property) => (
          <div className='' key={property._id}>
            <PropertyCard property={property} />
          </div>
        ))
      )}
    </div>
  );
}

export default Houses;
