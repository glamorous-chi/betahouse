import "../CSS/Nav.css";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoDesktop from "./LogoDesktop";
import woman from "../assets/woman.png";

const DesktopNav = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAccountChange = (e) => {
    const value = e.target.value;
    if (value === "Logout") {
      logout();
    } else if (value === "Dashboard") {
      navigate(auth.user.role === 1 ? "" : "");
    } else if (value === "Login") {
      navigate("/login");
    } else if (value === "Signup") {
      navigate("/signup");
    }
  };

  return (
    <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
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
        <div className="flex-justify-content">
          <img src={woman} alt="profile picture" />
          <div className="select-container">
          <select onChange={handleAccountChange} id="mySelect">
            <option value="" style={{ color: "black" }}>
              {auth?.user
                ? auth.user.firstName + " " + auth.user.lastName
                : "My Account"}
            </option>
            {!auth.user ? (
              <>
                <option value="Login" style={{ color: "black" }}>Login</option>
                <option value="Signup" style={{ color: "black" }}>Signup</option>
              </>
            ) : (
              <>
                <option value="Dashboard"style={{ color: "black" }} >Dashboard</option>
                <option value="Logout" style={{ color: "red" }}>
                  Logout
                </option>
              </>
            )}
          </select>
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default DesktopNav;
