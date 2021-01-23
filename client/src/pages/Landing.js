import React, { useEffect } from "react";
// import PropertyList from "../components/Properties"

import Jumbotron from "../components/Jumbotron";
import Properties from "../components/Properties";

import { useDispatch, useSelector } from "react-redux";

import { QUERY_PROPERTIES } from "../utils/queries";
import { UPDATE_PROPERTIES } from "../utils/actions";

import { useQuery } from "@apollo/react-hooks";

const Landing = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { loading, data } = useQuery(QUERY_PROPERTIES);
  console.log(data, loading);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PROPERTIES,
        properties: data.properties,
      });
    }
  }, [dispatch, data]);

  console.log("state:", state.properties);

  return (
    <div>
      {/* <h1>In A Virtual World, Live Real</h1> */}
      <Jumbotron>
        <Properties />
      </Jumbotron>
      {/* <PropertyList /> */}
    </div>
  );
};

export default Landing;
