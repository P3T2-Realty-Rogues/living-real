import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

function Properties() {
  const state = useSelector((state) => state);

  return (
    <div className="col-auto flex-column">
      <div className="carousel col-auto">
        <div className="image-slider">
          <Carousel
            autoPlay={false}
            stopAutoPlayOnHover={true}
            className="image-slider"
            animation="slide"
          >
            {state.properties.map((image, index) => (
              <Link to={`/detail/${image._id}`} key={image._id}>
                <Paper
                  elevation={0}
                  key={image._id}
                  style={{ background: "none" }}
                >
                  <img
                    className="carousel-img"
                    key={image._id}
                    alt={image.propertyName}
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
      </div>

      <div className="card">
        <p className="p-dark">
          This is the website of Acme Properties. We are honored that you have
          taken the time to preview our exclusive properties. You can click on
          the images above to view additional photographs and details about each
          property. If you are interested in leasing a certain property, we
          invite you to submit an application, and we will contact you to start
          the process.
        </p>
        <p className="p-dark">Sincerely, Acme Properties Management</p>
      </div>
    </div>
  );
}

export default Properties;
