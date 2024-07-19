// import '../CSS/Properties.css'
import { Link,NavLink } from "react-router-dom";
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import { useMediaQuery } from 'react-responsive';
import Hero from '../components/Hero';
import Footer from "../components/Footer";

const Properties = () => {
  return (
    <div className='property-page'>
        <Hero/>
  <Footer/>

    </div>
  )
}

export default Properties