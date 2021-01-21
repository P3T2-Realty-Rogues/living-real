import React, { useState, Component } from "react";
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";



// function Properties() {



  // handleClick  => {

  // }

  // return (
  //   <Carousel>
  //   <div>
  //     {properties.map((image) => (
  //       <img key={image.id} 
  //         alt={image.name}
  //         // width="300" height="auto" 
  //         src={require(`../../assets/images/properties/${image.id}.jpg`)}
  //         // onClick={handleClick}
  //         >
  //       </img>
  //     ))}
  //   </div>
  //   </Carousel>
  // );

  class Properties extends Component {
    
    render() {

      // const [properties] = useState([
      //   {
      //     id: 1,
      //     name: 'Home1',
      //     description: '',
      //   },
      //   {
      //     id: 2,
      //     name: 'Home1',
      //     description: '',
      //   },
      //   {
      //     id: 3,
      //     name: 'Home1',
      //     description: '',
      //   },
      // ])

         return (
          <Carousel>
          <div>
              <img src={require("../../assets/images/properties/1.jpg" )}/>
              <p className="legend">Home 1</p>
         </div>
         <div>
              <img src={require("../../assets/images/properties/2.jpg" )} />
              <p className="legend">Home 2</p>
          </div>
          <div>
              <img src={require("../../assets/images/properties/3.jpg" )} />
              <p className="legend">Home 3</p>
          </div>
         </Carousel>
       );
    }
 };

//  ReactDOM.render(<Properties />);
//  // Don't for


export default Properties;
