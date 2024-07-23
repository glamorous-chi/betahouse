import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/Auth";
import { toast } from "react-toastify";
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName|| !email || !password) {
      console.log("enter all fields....");
      return toast.error("Enter all fields");
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return toast.error("invalid email address");
    }
    const pwdTrim = password.trim();
    if (!password || pwdTrim.length < 6) {
      return toast.error("Enter a valid password");
    }
    try {
      // sending form data to server
      setLoading(true);
      const data = await signup(firstName, lastName,email, password);

      // check for successful registration
      if (!data?.error) {
        toast.success("Sign up successful");
        setLoading(false);
        setTimeout(() => {
          navigate("/properties");
        }, 5000);
      } else {
        toast.error("Sign up failed");
      }
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data;
      toast.error(error);
      setLoading(false);
    }
  };
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
        {isDesktopOrLaptop ? '' : <div style={{display:"grid",placeItems:"center"}}><Link to={'/properties'}><LogoMobile/></Link></div>}
          <div className="heading">
            <h1 className="text-darker-black fw-600">
              Join our community of home seekers and explore the possibilities
              that await.
            </h1>
            <p className="fs-50">
              Let's get started by filling out the information below
            </p>
          </div>
          <form action="" className="flex-column grid-hero" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <label>First Name</label>
                <input type="text" placeholder="Enter First Name" value={firstName} onChange={handleFirstNameChange}/>
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Last Name" value={lastName} onChange={handleLastNameChange}/>
              </div>
            </div>
            <label>Email</label>
            <input type="text" placeholder="Enter Email" value={email}
                  onChange={handleEmailChange}/>
            <label>Password</label>
            <div className="password-field flex">
              <input type={showPassword ? "text" : "password"} placeholder="Enter Password" value={password}
                    onChange={handlePasswordChange}/>
              <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <IoEyeSharp className="" />
                    ) : (
                      <FaEyeSlash className="" />
                    )}
                    
                  </span>
            </div>

            <label>Confirm Password</label>
            <div className="password-field flex">
              <input type={!showConfirmPassword ? "password" : "text"} placeholder="Confirm Password" value={confirmPassword}
                    onChange={handleConfirmPasswordChange} className="confirmPassword"/>
              <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <IoEyeSharp className="" />
                    ) : (
                      <FaEyeSlash className="" />
                    )}
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
            <button type="submit" onClick={handleSubmit} className="signup-button">
              {
                loading? (
                  <>
                  <span role="status">Loading...</span>
                  </>
                ):
                "Sign up"
              }
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
