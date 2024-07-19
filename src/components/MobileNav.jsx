import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/Nav.css";
import LogoMobile from "./LogoMobile";
import PersonImage from '../assets/Person.png'
import cartImage from '../assets/Cart.png'
import LogoImage from '../assets/Logo.png'
import heroImage from '../assets/Hero.png'

const MobileNav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
    <div className="" style={{marginInline:"auto"}}>
      <header className="bg-white header" style={{padding:"1rem 2rem"}}>
        <button
          className={`nav-toggle ${isNavVisible ? "close" : ""}`}
          onClick={toggleNavVisibility}
          aria-expanded={isNavVisible}
        >
          <span className="sr-only"></span>
        </button>
        <Link to={"/"}>
          <LogoMobile />
        </Link>
        <Link to={'/login'}><img src={PersonImage} alt="account icon" /></Link>
        <Link to={'/cart'}><img src={cartImage} alt="cart" /></Link>
      </header>

      <nav className={`mobile-nav ${isNavVisible ? "visible" : ""}`}>
        <ul
          className="text-white flex-column underline-indicators nav-list"
          id="primary-navigation"
          data-visible={isNavVisible}
        >
          
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="active">
            <NavLink to={"/properties"}>Properties</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"}>Contact Us</NavLink>
          </li>
        </ul>
      </nav>  
    </div>
<div className="heroo-image"></div>    </>
    
  );
};

export default MobileNav;
