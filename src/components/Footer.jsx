import React from 'react';
import '../CSS/Footer.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer bg-primary-dark">
      <div className="footer-content container-main">
        <div className="footer-section">
          <img src={logo} alt="BetaHouse Logo" className="footer-logo" />
          <p>
            Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!
          </p>
          <ul>
            <li><i className="fas fa-map-marker-alt"><CiLocationOn/></i> 95 Tinubu Estate, Lekki, Lagos</li>
            <li><i className="fas fa-phone"><FaPhone/></i> +234 675 89375 675</li>
            <li><i className="fas fa-envelope"><FaEnvelope/></i> support@rentbetahouse.com</li>
          </ul>
        </div>
        <div className="footer-section footer-section-links">
          <h4>Quick Links</h4>
          <ul>
          <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="">
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
        </div>
        <div className="footer-section footer-section-more">
          <h4>More</h4>
          <ul>
            <li>Agents</li>
            <li>Affordable Houses</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className="footer-section-popular">
          <h4>Popular Search</h4>
          <ul style={{padding:"0"}}>
            <li>Apartment for sale</li>
            <li>Apartment for rent</li>
            <li>3 bedroom flat</li>
            <li>Bungalow</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2023 Betahouse | Designed by Michaelfig</p>
        <p><a href="/privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
