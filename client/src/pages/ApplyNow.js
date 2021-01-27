import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_PROPERTIES } from "../utils/queries";
import { UPDATE_PROPERTIES} from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { Link } from "react-router-dom"
import Upload from '../components/Upload'




function ApplyNow() {

  const { id } = useParams();       // this is the property ID
  const propertyId = id;

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentProperty, setCurrentProperty] = useState({});

  const { loading, data } = useQuery(QUERY_PROPERTIES);

  const {properties} = state;

  useEffect(() => {
    // Data is already in global store
    if (properties.length) {
      setCurrentProperty(properties.find(property => property._id === propertyId));
    }
    // If not, retrieve from the server
    else if (data) {
      dispatch({
        type: UPDATE_PROPERTIES,
        properties: data.properties
      });

      data.properties.forEach((property) => {
        idbPromise('properties', 'put', property);
      });
    }
    // If off-line, get data cache from idb (local browser storage).
    else if (!loading) {
      idbPromise('properties', 'get').then((indexedProperties) => {
        dispatch({
          type: UPDATE_PROPERTIES,
          properties: indexedProperties
        });
      });
    }
  }, [properties, data, loading, dispatch, propertyId]);

  console.log("In the 'ApplyNow()' function, currentProperty is: ",currentProperty)

  return (
    <div >

      {/* Display the general property information for the applicant. */}
      <header className="top-buffer">
        <h1 className="card-header">Property Information</h1>
      </header>

      <div className="card-body">
        <h1>Property Name: {currentProperty?.propertyName}</h1>
        <p>Property Type: {currentProperty?.propertyType}</p>          
        <p>Address: {currentProperty?.streetAddress}</p>
        <p>Location: {currentProperty?.city}, {currentProperty?.state}, {currentProperty?.zipCode}</p>
        <p>Application Fee ($): {currentProperty?.appFee}</p>
      </div>


      {/* Display the actual application form for the applicant to complete and submit. */}
      <form >
        <div className="card">
          <div className="card-header">
            <h3 className="card-header">Apply for a Property</h3>
          </div>

          <div className="card-body">

            {/* The fields below are entered by the applicant. */}
            <div>
              <label className="form-label" for="firstName"><b>First Name</b></label>
              <input className="form-input" type="text" placeholder="your first name" name="firstName"></input>
            </div>
            <div>
              <label className="form-label" for="lastName"><b>Last Name</b></label>
              <input className="form-input" type="text" placeholder="your last name" name="lastName"></input>
            </div>
            <div>
              <label className="form-label" for="email"><b>Email</b></label>
              <input className="form-input" type="text" placeholder="your email" name="email"></input>
            </div>
            <div>
              <label className="form-label" for="phone"><b>Phone Number</b></label>
              <input className="form-input" type="text" name="phone" placeholder="your phone number"></input>
            </div>

          </div>
        </div>
      </form>

    </div>
  );
}

export default ApplyNow;