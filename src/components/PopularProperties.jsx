import React from 'react'
import { data } from '../DB/PopularProperties'
import '../CSS/popularProperties.css'
import PopularPropertiesCard from '../components/cards/PopularProperties';

const PopularProperties = () => {
    return (
        <div className="image-gallery">
          {data.map((item) => (
            <PopularPropertiesCard key={item.id} img={item.img} />
          ))}
        </div>
      );
}

export default PopularProperties