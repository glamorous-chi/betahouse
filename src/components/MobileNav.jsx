import React, { useState } from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import "../CSS/Nav.css";
import LogoMobile from "./LogoMobile";
import PersonImage from '../assets/Person.png'

const MobileNav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { auth, login } = useAuth();
  const navigate = useNavigate();

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
        {!auth?.user ? (
            <Link to={'/login'}><img src={PersonImage} alt="account icon" /></Link>
        ) :(
          <Link
                to={
                  auth?.user.role === 1 ? "" : ""
                }
              >
                <img src={PersonImage} alt="account icon" />
              </Link>
        )}
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
