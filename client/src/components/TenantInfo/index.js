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
import { VscRequestChanges } from "react-icons/vsc";
import { CgFileDocument } from "react-icons/cg";
import {RiSecurePaymentLine} from "react-icons/ri";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function TenantInfo() {
	const currentUser = Auth.getProfile().data;
	const propertyId = currentUser.property;

	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const [currentProperty, setCurrentProperty] = useState({});

	const { loading, data } = useQuery(QUERY_PROPERTIES);

	const { properties } = state;

	const [getCheckout, { data: data2 }] = useLazyQuery(QUERY_CHECKOUT);

	function submitCheckout() {
		getCheckout({
			variables: { property: propertyId },
		});
	}

	useEffect(() => {
		// already in global store
		if (properties.length) {
			setCurrentProperty(
				properties.find(property => property._id === propertyId)
			);
		}
		// retrieved from server
		else if (data) {
			dispatch({
				type: UPDATE_PROPERTIES,
				properties: data.properties,
			});

			data.properties.forEach(property => {
				idbPromise('properties', 'put', property);
			});
		}
		// get cache from idb
		else if (!loading) {
			idbPromise('properties', 'get').then(indexedProperties => {
				dispatch({
					type: UPDATE_PROPERTIES,
					properties: indexedProperties,
				});
			});
		}
	}, [properties, data, loading, dispatch, propertyId]);

	useEffect(() => {
		if (data2) {
			stripePromise.then(res => {
				res.redirectToCheckout({
					sessionId: data2.checkout.session,
				});
			});
		}
	}, [data2]);

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
        <p>Rent Due: ${currentProperty?.rent}</p>
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
          <button
            className="create-btn"  id="button-hover" 
            onClick={submitCheckout}
          >
             <RiSecurePaymentLine size={30} color="var(--light)"></RiSecurePaymentLine><br /> <b>Pay Rent</b>
          </button>
          <Link to="/LeaseDoc" className="create-btn"  id="button-hover">
		    <CgFileDocument size={30} color="var(--light)"></CgFileDocument><br /> <b>Lease Document</b>
          </Link>
          <Link to="/Contact">
            <div className="create-btn"  id="button-hover"><VscRequestChanges size={30} color="var(--light)"></VscRequestChanges><br /> <b>Submit Maintenance Requests</b>{' '}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TenantInfo;