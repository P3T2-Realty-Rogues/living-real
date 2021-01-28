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
    <div className="contentContainerColumn">
      <div  className="image-slider top-buffer">
      <Carousel autoPlay={true} stopAutoPlayOnHover={true} className="image-slider" animation="slide">
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
        <p className="p-dark">
          This is the website of Acme Properties.  We are honored that you have taken the time to
          preview our exclusive properties.  You can click on the images above to view additional 
          photographs and details about each property.  If you are interested in leasing a certain
          property, we invite you to submit an application, and we will contact you to start
          the process.
        </p>
        <p className="p-dark">Sincerely,
          Acme Properties Management
        </p>
      </div>

      {/* Add the social media icons. Since this isn't a real website, with a real owner, there are no social media
          accounts.  Link these icons back to the UT-Boot-Camp site for now.*/}
      <div > 
        <a href="https://courses.bootcampspot.com/" rel="noreferrer noopener" target='_blank'>
            <img className="social_icons" src={require(`../../assets/social_media/facebook.png`)} alt="Facebook" /></a>

         <a href="https://courses.bootcampspot.com/" rel="noreferrer noopener" target='_blank'>           
            <img className="social_icons" src={require(`../../assets/social_media/linkedin.png`)} alt="LinkedIn" /></a> 
  
         <a href="https://courses.bootcampspot.com/" rel="noreferrer noopener" target='_blank'>             
            <img className="social_icons" src={require(`../../assets/social_media/twitter.png`)} alt="Twitter" /></a>
   
         <a href="https://courses.bootcampspot.com/" rel="noreferrer noopener" target='_blank'>            
            <img className="social_icons" src={require(`../../assets/social_media/youtube.png`)} alt="YouTube" /></a>
    
        <a href="https://courses.bootcampspot.com/" rel="noreferrer noopener" target='_blank'> 
              <img className="social_icons" src={require(`../../assets/social_media/instagram.png`)} alt="Instagram" /></a>
      </div>
    </div>
  );
}

export default Properties;
