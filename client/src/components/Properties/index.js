import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

function Properties() {
  const state = useSelector((state) => state);

  return (
    <>
      <Carousel autoPlay="true" className="image-slider">
        {state.properties.map((image, index) => (
          <Link to={`/detail/${image._id}`} key={image._id}>
            <Paper key={image._id} style={{ background: "none" }}>
              <img
                key={image._id}
                alt={image.propertyName}
                className="carousel-item"
                src={
                  `https://living-real-bucket.s3.us-east-2.amazonaws.com/properties/` +
                  image.zipCode +
                  `.jpg`
                }
              ></img>
            </Paper>
          </Link>
        ))}
      </Carousel>
    </>
  );
}

export default Properties;
