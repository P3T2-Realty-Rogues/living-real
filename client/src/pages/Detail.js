import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UPDATE_PROPERTIES } from "../utils/actions";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PROPERTIES } from "../utils/queries";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

////////////////////////////////////////////////////////////////////////////////////////
function Detail() {
  const { id } = useParams();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentProperty, setCurrentProperty] = useState({})

  const { loading, data } = useQuery(QUERY_PROPERTIES);

  const {properties} = state

  useEffect(() => {
    // already in global store
    if (properties.length) {
      setCurrentProperty(properties.find(property => property._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PROPERTIES,
        properties: data.properties
      });

      data.properties.forEach((property) => {
        idbPromise('properties', 'put', property);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('properties', 'get').then((indexedProperties) => {
        dispatch({
          type: UPDATE_PROPERTIES,
          properties: indexedProperties
        });
      });
    }
  }, [properties, data, loading, dispatch, id]);

  console.log( "In details.js, id value is: ", id) ;

  return (
    <>
      {/* General home pictures and info */}
      <div className="detail">
        <div className="image-slider top-buffer">
          <Carousel showThumbs={false} autoPlay="true" animation="slide">
            {currentProperty.pictures?.map((image, index) => (
              <Paper className="image-container" style={{ background: "none" }}>
                <img
                  alt=""
                  src={`https://living-real-bucket.s3.us-east-2.amazonaws.com/${currentProperty.directoryName}/${currentProperty.pictures[index]}`}
                ></img>
              </Paper>
            ))}
          </Carousel>
        </div>
        <header>
          <h1>Property Name: {currentProperty.propertyName}</h1>
          <h3>Address:</h3>
          <p>
            {currentProperty.streetAddress} <br></br>
            {currentProperty.city}, {currentProperty.state}{" "}
            {currentProperty.zipCode}
          </p>
        </header>
  
        <div className='contentContainerColumn'>
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
                <td>{currentProperty.sqFeet}</td>
              </tr>
              <tr>
                <td>No. bathrooms</td>
                <td> </td>
                <td>{currentProperty.numBathrooms}</td>
              </tr>
              <tr>
                <td>No. bedrooms</td>
                <td> </td>
                <td>{currentProperty.numBedroom}</td>
              </tr>
              <tr>
                <td>Balcony</td>
                <td> </td>
                <td>{currentProperty.balcony}</td>
              </tr>
              <tr>
                <td>Rent</td>
                <td> $ </td>
                <td>{currentProperty.rent}</td>
              </tr>
              <tr>
                <td>Pet Deposit</td>
                <td> $ </td>
                <td>{currentProperty.petDeposit}</td>
              </tr>
              <tr>
                <td>Rent Deposit</td>
                <td> $ </td>
                <td>{currentProperty.renterDeposit}</td>
              </tr>
              <tr>
                <td>Application Fee</td>
                <td> $ </td>
                <td>{currentProperty.appFee}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Ability to apply for this property */}
        <div className="contentContainer">
          <p>&nbsp;</p>
          {/* <button className="btnNav">Apply Now</button> */}
          <Link className="btnNav" to={`/ApplyNow/${id}`}>Apply Now</Link>
          <Link to="/" className="btnNav">
            Back to Dashboard
          </Link>
          <br />
        </div>
      </div>
    </>
  );
}

export default Detail;
