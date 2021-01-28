import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

function Properties() {
  const state = useSelector((state) => state);

  return (
    <>
      <div  className="image-slider top-buffer">
      <Carousel autoPlay={true} stopAutoPlayOnHover={true} className="image-slider">
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
      </div>
      
      <div className="card">
        <p>
          This is the website of Acme Properties.  We are honored that you have taken the time to
          preview our exclusive properties.  You can click on the images above to view additional 
          photographs and details about each property.  If you are interested in leasing a certain
          property, we invite you to submit an application, and we will contact you to start
          the process.
        </p>
        <p>Sincerely,
          Acme Properties Management
        </p>
      </div>
    </>
  );
}

export default Properties;
