import React from 'react';
import '../CSS/Footer.css';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="footer bg-primary-dark">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="BetaHouse Logo" className="footer-logo" />
          <p>
            Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!
          </p>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> 95 Tinubu Estate, Lekki, Lagos</li>
            <li><i className="fas fa-phone"></i> +234 675 89375 675</li>
            <li><i className="fas fa-envelope"></i> support@rentbetahouse.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Properties</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>More</h4>
          <ul>
            <li>Agents</li>
            <li>Affordable Houses</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Popular Search</h4>
          <ul>
            <li>Apartment for sale</li>
            <li>Apartment for rent</li>
            <li>3 bedroom flat</li>
            <li>Bungalow</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2023 Betahouse | Designed by Michaelfg</p>
        <p><a href="/privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
