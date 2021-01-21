import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

////////////////////////////////////////////////////////////////////////////////////////
function Detail() {
  const { id } = useParams();
  const state = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(state);
  return (
    <>
      {/* General home pictures and info */}
      <header>
        <div>Image carousel of home views goes here...</div>

        <h1>Property Name: Home 1</h1>
        <h3>Address: street, city, state, zip</h3>
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
