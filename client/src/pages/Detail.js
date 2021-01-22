import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { UPDATE_PROPERTY } from '../utils/actions';

////////////////////////////////////////////////////////////////////////////////////////
function Detail() {
	const { id } = useParams();
	const state = useSelector(state => state);
  const dispatch = useDispatch();

  
  const currentProperty = state.properties.find(({ _id }) => _id === id);

	useEffect(() => {
		if (currentProperty) {
			dispatch({
				type: UPDATE_PROPERTY,
				currentProperty,
			});
		}
		// on page leave (component unmount), unset current book
		return () => {
			dispatch({
				type: UPDATE_PROPERTY,
				currentProperty: {},
			});
		};
	}, [currentProperty, dispatch]);

	return (
		<>
			{/* General home pictures and info */}
			<header>
				<div>Image carousel of home views goes here...</div>

				<h1>Property Name: {state.currentProperty.propertyName}</h1>
				<h3>Address:</h3>
        <p>{state.currentProperty.streetAddress} <br></br>
        {state.currentProperty.city}, {state.currentProperty.state} {state.currentProperty.zipCode}</p>
        {/* <h4>{state.currentProperty.streetAddress}</h4>
        <h4>{state.currentProperty.city}, {state.currentProperty.state} {state.currentProperty.zipCode}</h4> */}
			</header>

			<div>
				{/* Property description */}
				<h2>Home Description: </h2>
				<p>lorem ipsum</p>
			</div>

			<div>
				{/* Property details and amenities */}
				Table of property details
			</div>

			{/* Ability to apply for this property */}
			<button>Apply Now</button>
		</>
	);
}

export default Detail;
