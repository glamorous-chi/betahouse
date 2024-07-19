import React from "react";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import { useMediaQuery } from "react-responsive";

const ContactUs = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 54em)" });
  return (
    <div className="contact-us-image">
      {isDesktopOrLaptop ? <DesktopNav /> : <MobileNav />}
      <div className="home-text">
        <h1 className="fs-900">Contact Us Page</h1>
        <p className="text-align fs-300">Coming Soon!</p>
      </div>
    </div>
  );
};

export default ContactUs;
