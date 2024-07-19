import React from 'react'
import '../CSS/Signup.css';
import { Link } from 'react-router-dom';
import googleLogo from '../assets/search.png';
import LogoDesktop from "../components/LogoDesktop"
import LogoMobile from "../components/LogoMobile"
import Logo from '../components/LogoDesktop';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { IoEyeSharp } from "react-icons/io5";

const Login = () => {
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
        <Link to={'/'}><LogoMobile/></Link>
      </div>}
        
        <div className='heading'>
          <h1 className='text-darker-black fw-600'>Welcome Back to BetaHouse!</h1>
          <p className='fs-50'>Let's get started by filling out the information below</p>
        </div>
        <form action="" className='flex-column grid-hero'>
          <label>Email</label>
          <input type="text" placeholder='Enter Email' />
          <label>Password</label>
            <div className="password-field flex">
              <input type="password" placeholder="Enter Password" />
              <span>
                {" "}
                <FaEyeSlash />{" "}
              </span>
            </div>
          <div className='flex-justify-content'>
          <div className='flex-hero' style={{ marginTop: "1rem" }}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <p className='text-primary'>Forgot password?</p>
          </div>
         
          <button type="submit" className='signup-button'>Sign in</button>
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