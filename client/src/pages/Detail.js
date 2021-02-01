import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UPDATE_PROPERTIES } from "../utils/actions";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-material-ui-carousel";
import { Paper, withWidth } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_PROPERTIES } from "../utils/queries";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";

////////////////////////////////////////////////////////////////////////////////////////
function Detail() {
  const { id } = useParams();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentProperty, setCurrentProperty] = useState({});

  const { loading, data } = useQuery(QUERY_PROPERTIES);

  const { properties } = state;

  useEffect(() => {
    // already in global store
    if (properties.length) {
      setCurrentProperty(properties.find((property) => property._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PROPERTIES,
        properties: data.properties,
      });

      data.properties.forEach((property) => {
        idbPromise("properties", "put", property);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("properties", "get").then((indexedProperties) => {
        dispatch({
          type: UPDATE_PROPERTIES,
          properties: indexedProperties,
        });
      });
    }
  }, [properties, data, loading, dispatch, id]);

  return (
    <div>
      <div>
        <div className="flex-row">
          <div className="card carousel-detail image-slider top-buffer">
            <Carousel showThumbs={false} autoPlay="true" animation="slide">
              {currentProperty.pictures?.map((image, index) => (
                <Paper
                  className="image-container"
                  elevation={0}
                  style={{ background: "none" }}
                  key={index}
                >
                  <img
                    alt=""
                    src={`https://living-real-bucket.s3.us-east-2.amazonaws.com/${currentProperty.directoryName}/${currentProperty.pictures[index]}`}
                  ></img>
                </Paper>
              ))}
            </Carousel>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-header">Home Details</h3>
            </div>
            <div className="card-body">
              <div className="table">
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
              <div></div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-header">{currentProperty.propertyName}</h3>
            </div>
            <div className="card-body">
              <h1>Property Name: {currentProperty.propertyName}</h1>
              <h3>Address:</h3>
              <p>
                {currentProperty.streetAddress} <br></br>
                {currentProperty.city}, {currentProperty.state}{" "}
                {currentProperty.zipCode}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-header">Home Description</h3>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-header">Options</h3>
            </div>
            <div className="card-body">
              <Link
                className="create-btn"
                id="button-hover"
                to={`/ApplyNow/${id}`}
              >
                <FaUserPlus size={30} color="var(--light)"></FaUserPlus>
                <br />
                <b>Apply Now</b>
              </Link>
              <Link to="/" className="back-btn" id="button-hover">
                <RiArrowGoBackLine
                  size={30}
                  color="var(--light)"
                ></RiArrowGoBackLine>
                <p>Go Back</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
