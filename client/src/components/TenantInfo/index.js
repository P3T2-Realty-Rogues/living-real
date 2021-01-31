import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import Auth from "../../utils/auth"
import { QUERY_PROPERTIES, QUERY_CHECKOUT } from "../../utils/queries";
import { UPDATE_PROPERTIES} from "../../utils/actions";
import toTitleCase from "../../utils/helpers"
//import the idb helper to make transactions with the database
import { idbPromise } from "../../utils/helpers";
import { loadStripe } from '@stripe/stripe-js';
import {RiArrowGoBackLine} from "react-icons/ri";



const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function TenantInfo() {
  const currentUser = Auth.getProfile().data
  const propertyId = currentUser.property

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentProperty, setCurrentProperty] = useState({})

  const { loading, data } = useQuery(QUERY_PROPERTIES);

  const {properties} = state

  const [getCheckout] = useLazyQuery(QUERY_CHECKOUT);

  console.log("data: ", data);

  function submitCheckout() {
    console.log("in submit");

    getCheckout({
      
    });
  }

  useEffect(() => {
    // already in global store
    if (properties.length) {
      setCurrentProperty(properties.find(property => property._id === propertyId));
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
  }, [properties, data, loading, dispatch, propertyId]);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        // res.redirectToCheckout({ sessionId: data.checkout.session });
        res.redirectToCheckout({ sessionId: 4455 });
      });
    }
  }, [data]);

  console.log("currentUser: ", currentUser);
  console.log("currentProperty: ", currentProperty);

  return (
    <div className="card">
      <header>
        <h1 className="card-header">Lease Information</h1>
      </header>
      <div className="card-body">
        <h2>
          {toTitleCase(currentUser?.firstName)} &nbsp;
          {toTitleCase(currentUser?.lastName)}
        </h2>
        <p>
            Rent Due: ${currentProperty?.rent}
          </p>
        <ul className="tenant-info">
          <li>Address: {currentProperty?.streetAddress}</li>
          <li>Email: {currentUser?.email}</li>
          <li>Phone: {currentUser?.phoneNumber}</li>
        </ul>
        <div>
          <p>
            Lease Start:&nbsp;
            {currentUser?.tenantData?.leaseDate}
          </p>
          <Link  onClick={submitCheckout}>
            <button className="create-btn">Pay Rent</button>
            
          </Link>
          <Link to="/LeaseDoc" className="btn">
            Lease Document
          </Link>
          <Link className="btn" to="/Contact">
            Submit Maintenance Request
          </Link>
          <br />
          <Link to="/" className="back-btn">
                <RiArrowGoBackLine size={30} color="var(--light)"></RiArrowGoBackLine>
                <p>Back</p>
              </Link>
        </div>
      </div>
    </div>
  );
}

export default TenantInfo;
