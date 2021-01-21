import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import {QUERY_PROPERTY} from  "../../utils/queries"

function Properties() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      property: properties
    })
  };

  const [properties] = useState([
    {
      id: 1,
      name: "Home1",
      description: "LOREM IPSUM",
    },
    {
      id: 2,
      name: "Home2",
      description: "IPSUM LOREM",
    },
    {
      id: 3,
      name: "Home3",
      description: "SOME TEXT",
    },
  ]);
  // console.log([properties]);

 
  // <div>
  //    {properties.map((image) => (
  //       <img key={image.id}
  //         alt={image.name}
  //         // width="300" height="auto"
  //         src={require(`../../assets/images/properties/${image.id}.jpg`)}
  //         // onClick={handleClick}
  //         >
  //       </img>
  //     ))}
  //   </div>
  return (
    <Carousel>
      {properties.map((image) => (
        <Link to={`/detail/${image.id}`}>
          <div key={image.id}>
            <img
              key={image.id}
              alt={image.name}
              // width="300" height="auto"
              src={require(`../../assets/images/properties/${image.id}.jpg`)}
              onClick={handleClick}
            ></img>
            <button className="legend" id="legend" onClick={handleClick}>
              {image.name}
            </button>
          </div>
        </Link>
      ))}
      {/* <img src={require("../../assets/images/properties/1.jpg")} />
        <button className="legend" id="legend">
          Home 1
        </button>
      </div>
      <div>
        <img src={require("../../assets/images/properties/2.jpg")} />
        <button className="legend" id="legend">
          Home 2
        </button>
      </div>
      <div>
        <img src={require("../../assets/images/properties/3.jpg")} />
        <button className="legend" id="legend">
          Home 3
        </button> */}
    </Carousel>
  );
}

export default Properties;
