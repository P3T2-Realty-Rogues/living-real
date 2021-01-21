import React, { useState, Component } from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";



function Properties() {

  const [properties] = useState([
    {
      id: 1,
      name: 'Home1',
      description: '',
    },
    {
      id: 2,
      name: 'Home1',
      description: '',
    },
    {
      id: 3,
      name: 'Home1',
      description: '',
    },
  ])

  // handleClick  => {

  // }

  return (
    <Carousel>
    <div>
      {properties.map((image) => (
        <img key={image.id} 
          alt={image.name}
          // width="300" height="auto" 
          src={require(`../../assets/images/properties/${image.id}.jpg`)}
          // onClick={handleClick}
          >
        </img>
      ))}
    </div>
    </Carousel>
  );
}

export default Properties;
