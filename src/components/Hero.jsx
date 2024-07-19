import React from "react";
import { Link, NavLink } from "react-router-dom";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import { useMediaQuery } from "react-responsive";
import "../CSS/Hero.css";
import SearchBar from "./SearchBar";
import heroImage from "../assets/Hero.png"

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 54em)" });
  return (
    <div>
      {/* Desktop */}
      
        {isDesktopOrLaptop ? <>
          <div className="hero-image">
          <DesktopNav /> 
        <section className="hero-section" style={{}}>
        <h1 className="fw-600 fs-900">Browse Our Properties</h1>
        <p className="fs-100">
          Find your perfect home among our curated properties. Start browsing
          now!
        </p>
        {/* Form Section */}
        <SearchBar/>
      </section>
      </div>
      </>
        : <>
          <MobileNav />
          <img src={heroImage} alt="" style={{position:"relative"}}/>
        <section className="hero-section" style={{position:"absolute", top:"3rem",left:"2rem"}}>
          <h1 className="fw-600 fs-300 text-white">Browse Our Properties</h1>
          <p className="text-white">
            Find your perfect home among our curated properties. Start browsing
            now!
          </p>
        </section>
        </>}
        
      {/* </div> */}

      {/* Mobile */}
      {/* {isDesktopOrLaptop ? <DesktopNav /> : <MobileNav />} */}
      
      {/* </div> */}
    </div>
  );
};

export default Hero;
