import React from "react";
import DesktopNav from "../components/DesktopNav";
import MobileNav from "../components/MobileNav";
import { useMediaQuery } from "react-responsive";

const NotFound = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 54em)" });
  return (
    <>
      {isDesktopOrLaptop ? <DesktopNav /> : <MobileNav />}
      <div>
        <h1 className="grid" style={{ placeItems: "center", height: "100vh" }}>
          Page not found!
        </h1>
      </div>
    </>
  );
};

export default NotFound;
