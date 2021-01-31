import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { QUERY_PROPERTIES, QUERY_CHECKOUT } from '../../utils/queries';
import { UPDATE_PROPERTIES } from '../../utils/actions';
import toTitleCase from '../../utils/helpers';
//import the idb helper to make transactions with the database
import { idbPromise } from '../../utils/helpers';
import { loadStripe } from '@stripe/stripe-js';

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
					<button className="btnNav" onClick={submitCheckout}>
						Pay Rent
					</button>
					<a
						className="btnNav"
						href="https://drive.google.com/file/d/1s0VzqW0LTLrzxaDQUcN1g0aF7fqQ6S47/view?usp=sharing"
						target="_blank"
						rel="noreferrer noopener"
					>
						Lease Document
					</a>
					<Link to="/TenantDash/MaintenanceRequests">
						<div className="btnNav">
							View Maintenance Requests{' '}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default TenantInfo;