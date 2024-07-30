import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import LogoMobile from "../components/LogoMobile";
import DetailCard from "../components/cards/DetailCard";
import axios from "axios";

const DetailPage = () => {
  const [propertyC, setPropertyC] = useState(null);
  const [loading, setLoading] = useState(false);
  const { propertyId } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/property/${propertyId}`);
        console.log("Fetched data:", response.data);
        setPropertyC(response.data.property);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [propertyId]);

  return (
    <div className="flex" style={{ height: "20rem", textAlign: "left" }}>
      <div style={{ height: "20rem" }}>
        <DetailCard property={propertyC} />
      </div>
    </div>
  );
};

export default DetailPage;
