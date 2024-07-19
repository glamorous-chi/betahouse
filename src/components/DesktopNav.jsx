import "../CSS/Nav.css";
import { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoDesktop from "./LogoDesktop";
import woman from "../assets/woman.png";

const DesktopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`sticky-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="flex-justify-content container-main">
        <Link to={"/"}>
          <LogoDesktop />
        </Link>

        <nav className="desktop-nav ">
          <ul className="text-white flex underline-indicators fs-70">
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
        <img src={woman} alt="profile picture" />
      </div>
    </header>
  );
};

export default DesktopNav;
