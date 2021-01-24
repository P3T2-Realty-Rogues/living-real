import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { UPDATE_PROPERTY } from "../utils/actions";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

////////////////////////////////////////////////////////////////////////////////////////
function Detail() {
  const { id } = useParams();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const currentProperty = state.properties.find(({ _id }) => _id === id);
  // const propertyImages =  currentProperty.
  console.log("current property", 
  currentProperty)
  useEffect(() => {
    if (currentProperty) {
      dispatch({
        type: UPDATE_PROPERTY,
        currentProperty,
      });
    }
    return () => {
      dispatch({
        type: UPDATE_PROPERTY,
        currentProperty: {},
      });
    };
  }, [currentProperty, dispatch]);

  console.log("state in Details: ", state);
  console.log("current property", state.currentProperty.directoryName)
  return (
    <>
      {/* General home pictures and info */}
        <div className='card'>
        	<Carousel showThumbs={false} autoPlay infiniteLoop="true" >
	          <div className="image-container">
              
	            <img
	              width="300"
                height="auto"
                alt="backyard image"
	              src={
	                `https://living-real-bucket.s3.us-east-2.amazonaws.com/${state.currentProperty.directoryName}/` +
	                "backyard" +
	                `.jpg`
                }
	            ></img>
	            <button
	              className="legend"
	              id="legend"
	              // onClick={handleClick}
	            >
	              {state.currentProperty.propertyName}
	            </button>
	          </div>
	        </Carousel>
        </div>
      <header>

        <h1>Property Name: {state.currentProperty.propertyName}</h1>
        <h3>Address:</h3>
        <p>
          {state.currentProperty.streetAddress} <br></br>
          {state.currentProperty.city}, {state.currentProperty.state}{" "}
          {state.currentProperty.zipCode}
        </p>
      </header>

      <div>
        <p>&nbsp;</p>
        {/* Property description */}
        <h2>Home Description: </h2>
        <p>lorem ipsum</p>
      </div>

      <div className="table">
        <p>&nbsp;</p>
        {/* Property details and amenities */}
        <table className="ui striped  collapsing table">
          <thead>
            <tr>
              <th>Detail Item</th>
              <th>Unit</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Size</td>
              <td>sq. ft.</td>
              <td>{state.currentProperty.sqFeet}</td>
            </tr>
            <tr>
              <td>No. bathrooms</td>
              <td> </td>
              <td>{state.currentProperty.numBathrooms}</td>
            </tr>
            <tr>
              <td>No. bedrooms</td>
              <td> </td>
              <td>{state.currentProperty.numBedroom}</td>
            </tr>
            <tr>
              <td>Balcony</td>
              <td> </td>
              <td>{state.currentProperty.balcony}</td>
            </tr>
            <tr>
              <td>Rent</td>
              <td> $ </td>
              <td>{state.currentProperty.rent}</td>
            </tr>
            <tr>
              <td>Pet Deposit</td>
              <td> $ </td>
              <td>{state.currentProperty.petDeposit}</td>
            </tr>
            <tr>
              <td>Rent Deposit</td>
              <td> $ </td>
              <td>{state.currentProperty.renterDeposit}</td>
            </tr>
            <tr>
              <td>Application Fee</td>
              <td> $ </td>
              <td>{state.currentProperty.appFee}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Ability to apply for this property */}
      <div>
        <p>&nbsp;</p>
        <button className="btn">Apply Now</button>
        <Link to="/" className="btn">Back to Dashboard</Link>
        <br />
      </div>
    </>
  );
}

export default Detail;
