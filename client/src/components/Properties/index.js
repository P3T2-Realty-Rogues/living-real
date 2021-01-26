import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Properties() {
  const state = useSelector((state) => state);
  return (
    <Carousel style={{ background: "none"}} className="card" showThumbs={false} autoPlay infiniteLoop="true">
      {state.properties.map((image, index) => (
        <Link to={`/detail/${image._id}`} key={image._id}>
          <div key={image._id} className="carousel">
            <img
              key={image._id}
              alt={image.propertyName}
              // width="auto"
              // height="350"
              src={(`https://living-real-bucket.s3.us-east-2.amazonaws.com/properties/` + image.zipCode + `.jpg`)}
            // src={require(`../../assets/images/properties/${image.zipCode}.jpg`)}
            // onClick={handleClick}
            ></img>
            <button
              className="btn"
              
            // onClick={handleClick}
            >
              {image.propertyName}
            </button>
          </div>

        </Link>
      ))}
    </Carousel>
  );
}

export default Properties;
