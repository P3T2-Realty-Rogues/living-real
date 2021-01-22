import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Properties() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // const { properties } = state;
  // // console.log(properties);

  // // console.log(state);
  

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_PROPERTIES,
  //       properties: data.properties,
  //     });
  //   }
  // }, [dispatch, data]);
  const hardProperties = [
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
  ];

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch([...properties]);
  //   // console.log(property);
  // };

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop="true">
      {state.properties.map((image,index) => (
        <Link to={`/detail/${image._id}`} key={image._id}>
          <div key={image._id} className="image-container">
            <img
              key={image._id}
              alt={image.propertyName}
              width="300"
              height="auto"
              src={require(`../../assets/images/properties/${image.zipCode}.jpg`)}
              // onClick={handleClick}
            ></img>
            <button
              className="legend"
              id="legend"
              // onClick={handleClick}
            >
              {image.propertyName}
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
