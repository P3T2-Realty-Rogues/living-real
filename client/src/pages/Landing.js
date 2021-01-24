import React, { useEffect } from "react";
// import PropertyList from "../components/Properties"

import Jumbotron from "../components/Jumbotron";
import Properties from "../components/Properties";

import { useDispatch, useSelector } from "react-redux";

import { QUERY_PROPERTIES, QUERY_USERS } from "../utils/queries";
import { UPDATE_PROPERTIES, ADD_USER } from "../utils/actions";
// import Auth from "../utils/auth";

import { useQuery } from "@apollo/react-hooks";

const Landing = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // console.log("STATE", state);

  const properties = useQuery(QUERY_PROPERTIES);
  const users = useQuery(QUERY_USERS);

  // console.log("PROPERTIES", properties.data);
  // console.log("USERS", users.data);

  useEffect(() => {
    if (properties.data) {
      dispatch({
        type: UPDATE_PROPERTIES,
        properties: properties.data.properties,
      });
      if (users.data) {
        dispatch({
          type: ADD_USER,
          users: users.data.users,
        });
      }
    }
  }, [dispatch, properties.data, users.data]);

  // console.log("properties:", state.properties);
  // console.log("users:", state.user);

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
