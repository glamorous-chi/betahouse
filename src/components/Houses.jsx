import React, { useState, useEffect } from "react";
import PropertyCard from './cards/PropertyCard';
import "../CSS/Houses.css";
import axios from 'axios';
import SkeletonLoader from "../components/SkeletonLoader";
import { ScrollToTop } from "./Scrolltotop";

const Houses = () => {
  const [fetchProperties, setFetchProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/property/all?page=${page}&limit=9`);
      setFetchProperties(response?.data?.properties);
      setTotalPages(response?.data?.totalPages);
      console.log(response?.data?.properties);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const properties = fetchProperties;

  return (
    <div className='container-main'>
          <ScrollToTop/>
      <div className='property-cards'>
        {loading ? (
          <>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        ) : (
          properties.map((property) => (
            <div key={property._id}>
              <PropertyCard property={property} />
            </div>
          ))
        )}
      </div>
      <div className='pagination-controls' style={
        {marginTop:"5rem"}
      }>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Houses;
