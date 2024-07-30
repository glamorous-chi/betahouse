import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import LogoMobile from '../../components/LogoMobile';

const DetailCard = ({ property}) => {
  const { propertyId } = useParams();
  let image, price;
   if (property) {
     const { image, price } = property;
       let Price = price.toLocaleString(undefined);
   } else {
     console.error("Property data is not available yet.");
   }
   const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 54em)" });
  return (
    <div className="flex" style={{ height: "20rem", textAlign: "left" }}>
      <div style={{ height: "20rem" }}>
        <img src={image?.url} alt="" width="100%" height="100%" />
      </div>

      <div>
        <div className='signup-page'>
          {!isDesktopOrLaptop &&
            <div style={{ display: "grid", placeItems: "center" }}>
              <Link to={'/properties'}>
                <LogoMobile />
              </Link>
            </div>
          }

          <form action="" className='flex-column grid-hero'>
            <input type="text" placeholder='Name' required />
            <input type="text" placeholder='Phone number' required />
            <input type="text" placeholder='Email' required />
            <textarea name="" id="" defaultValue={"Hello, I am interested in this house"} required></textarea>
            <div className="flex-hero" style={{ marginTop: "1rem" }}>
              <input type="checkbox" required />
              <span>
                I agree to the
                <span className="text-primary">
                  <Link to={"/terms"}>Terms of Service</Link>
                </span>
              </span>
            </div>
            <button type="submit" className='signup-button'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
