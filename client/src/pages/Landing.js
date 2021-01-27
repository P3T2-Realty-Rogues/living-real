import React, { useEffect } from "react";
// import PropertyList from "../components/Properties"

import Jumbotron from "../components/Jumbotron";
import Properties from "../components/Properties";

import { useDispatch, useSelector } from "react-redux";

import { QUERY_PROPERTIES, QUERY_USERS } from "../utils/queries";
import { UPDATE_PROPERTIES, ADD_USER } from "../utils/actions";
// import Auth from "../utils/auth";

import { useQuery } from "@apollo/react-hooks";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

const Landing = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const properties = useQuery(QUERY_PROPERTIES);

  useEffect(() => {
    console.log('fired')
    if (properties.data) {
      dispatch({
        type: UPDATE_PROPERTIES,
        properties: properties.data.properties,
      });

      properties.data.properties.forEach((property) => {
        idbPromise('properties', 'put', property);
      });
    }
  }, [dispatch, properties.data]);

  return (
    
    <>
    
    <Properties />
   
  </>
    
  );
};

export default Landing;
