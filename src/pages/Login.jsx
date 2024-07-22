import React, { useState } from "react";
import '../CSS/Signup.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { toast } from "react-toastify";
import googleLogo from '../assets/search.png';
import LogoDesktop from "../components/LogoDesktop"
import LogoMobile from "../components/LogoMobile"
import Logo from '../components/LogoDesktop';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { IoEyeSharp } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      return toast.error("Enter all fields");
    }
    if ((!email || password) && (email || !password)){
      return toast.error("You need to sign up");
    }
    if(!email || password) {
      return toast.error("Email field is required");
    }
    else if(email || !password) {
      return toast.error("Password field is required");
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
      setLoading(true);
      const data = await login(email, password);
      const success = await login(email, password);
      setLoading(false);

      if (!data?.error) {
        setLoading(false);
        setTimeout(() => {
          navigate("/properties");
        }, 5000);
      } else {
        toast.error("Log in failed");
      }
    } catch (err) {
      // console.log(err?.message);
      const msg = err?.message;
      toast.error(msg);
      setLoading(false);
    }
  };

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 54em)" });
  return (
    <>
    <div className="house-hunt">
            <Link to={'/properties'} className='flex-hero'><p className='text-white fs-100 fw-800'>House Hunt at BetaHouse.com</p><span><FaArrowRightLong/></span></Link>
        </div>
     <div className='signup-page'>
      <div className='container-form'>
      {isDesktopOrLaptop ? '' : 
      <div style={{display:"grid",placeItems:"center"}}>
        <Link to={'/properties'}><LogoMobile/></Link>
      </div>}
        
        <div className='heading'>
          <h1 className='text-darker-black fw-600'>Welcome Back to BetaHouse!</h1>
          <p className='fs-50'>Let's get started by filling out the information below</p>
        </div>
        <form action="" className='flex-column grid-hero' onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="text" placeholder='Enter Email' value={email}
                onChange={handleEmailChange}/>
          <label>Password</label>
            <div className="password-field flex">
              <input type={showPassword ? "text" : "password"} placeholder="Enter Password"  value={password}
                  onChange={handlePasswordChange}/>
               <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <IoEyeSharp className="icon-m" />
                  ) : (
                    <FaEyeSlash className="icon-m" />
                  )}
                </span>
            </div>
          <div className='flex-justify-content'>
          <div className='flex-hero' style={{ marginTop: "1rem" }}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <p className='text-primary'>Forgot password?</p>
          </div>
         
          <button type="submit" className='signup-button'onClick={handleSubmit}>
            {loading? (
              <>
                <span role="status">Loading...</span>
              </>
            ) : "Sign in"}
            </button>
          <div className='divider'>or</div>
          <div className='google-button'>
            <Link className='flex-hero' to={'/google-auth'}>
              <img src={googleLogo} alt="Google logo" style={{ width: "1.2rem" }} />
              <span>Continue with Google</span>
            </Link>
          </div>
        </form>
        <p className='text-align text-secondary-accent' style={{marginTop: "1.5rem"}}>New User? <Link to={'/signup'}><span className='text-primary'>Sign up</span></Link></p>
      </div>
      <div className='signup-image'>
       <Link to={'/properties'}><LogoDesktop/></Link> 
      </div>
    </div>
    </>
   
  )
}

export default Login