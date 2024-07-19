import React from "react";
import "../CSS/Signup.css";
import { Link } from "react-router-dom";
import googleLogo from "../assets/search.png";
import LogoDesktop from "../components/LogoDesktop"
import LogoMobile from "../components/LogoMobile"
import { FaArrowRightLong } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import Thankyou from "./Thankyou";

const Signup = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 54em)" });
  return (
    <>
      <div className="house-hunt">
        <Link to={"/properties"} className="flex-hero">
          <p className="text-white fs-100 fw-800">
            House Hunt at BetaHouse.com
          </p>
          <span>
            <FaArrowRightLong />
          </span>
        </Link>
      </div>
      <div className="signup-page">
        <div className="container-form">
        {isDesktopOrLaptop ? '' : <div style={{display:"grid",placeItems:"center"}}><Link to={'/'}><LogoMobile/></Link></div>}
          <div className="heading">
            <h1 className="text-darker-black fw-600">
              Join our community of home seekers and explore the possibilities
              that await.
            </h1>
            <p className="fs-50">
              Let's get started by filling out the information below
            </p>
          </div>
          <form action="" className="flex-column grid-hero">
            <div className="form-group">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter First Name" />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Last Name" />
              </div>
            </div>
            <label>Email</label>
            <input type="text" placeholder="Enter Email" />
            <label>Password</label>
            <div className="password-field flex">
              <input type="password" placeholder="Enter Password" />
              <span>
                {" "}
                <FaEyeSlash />{" "}
              </span>
            </div>

            <label>Confirm Password</label>
            <div className="password-field flex">
              <input type="password" placeholder="Confirm Password" />
              <span>
                {" "}
                <FaEyeSlash />{" "}
              </span>
            </div>

            <div className="flex-hero" style={{ marginTop: "1rem" }}>
              <input type="checkbox" />
              <span>
                I agree to the{" "}
                <span className="text-primary">
                  <Link to={"/terms"}>Terms of Service</Link>
                </span>{" "}
                and{" "}
                <span className="text-primary">
                  <Link to={"/privacy"}>Privacy Policies</Link>
                </span>
              </span>
            </div>
            <button type="submit" className="signup-button">
              <Link to={"/thankyou"}>Sign up</Link>
            </button>
            <div className="divider">or</div>
            <div className="google-button">
              <Link className="flex-hero" to={"/google-auth"}>
                <img
                  src={googleLogo}
                  alt="Google logo"
                  style={{ width: "1.2rem" }}
                />
                <span>Continue with Google</span>
              </Link>
            </div>
          </form>
          <p
            className="text-align text-secondary-accent"
            style={{ marginTop: "1.5rem" }}
          >
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="text-primary">Sign in</span>
            </Link>
          </p>
        </div>
        <div className="signup-image">
          <Link to={"/properties"}>
            <LogoDesktop />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
