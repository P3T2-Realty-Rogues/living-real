import React, { useEffect } from "react";
// import PropertyList from "../components/Properties"
import Properties from "../components/Properties";

import { useDispatch } from "react-redux";

import { QUERY_PROPERTIES } from "../utils/queries";
import { UPDATE_PROPERTIES } from "../utils/actions";
// import Auth from "../utils/auth";

import { useQuery } from "@apollo/react-hooks";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

const Landing = () => {
  const dispatch = useDispatch();

  const properties = useQuery(QUERY_PROPERTIES);

  useEffect(() => {
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


    <div className='contentContainer'>

      <Properties />

    </div>


  );
};

export default Landing;
