import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { UPDATE_PROPERTIES } from "../utils/actions";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_PROPERTIES } from "../utils/queries";
import { MOVE_USER_OUT } from "../utils/mutations";

import { HiUserRemove } from "react-icons/hi";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const MoveUserOut = () => {
  const { id } = useParams();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentProperty, setCurrentProperty] = useState({});

  const { loading, data } = useQuery(QUERY_PROPERTIES);

  const { properties } = state;

  useEffect(() => {
    // already in global store
    if (properties.length) {
      setCurrentProperty(properties.find((property) => property._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PROPERTIES,
        properties: data.properties,
      });

      data.properties.forEach((property) => {
        idbPromise("properties", "put", property);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("properties", "get").then((indexedProperties) => {
        dispatch({
          type: UPDATE_PROPERTIES,
          properties: indexedProperties,
        });
      });
    }
  }, [properties, data, loading, dispatch, id]);

  const [moveUserOut] = useMutation(MOVE_USER_OUT);

  const [moveOutData, setMoveOutData] = useState({
    userId: "",
    propertyId: id,
  });

  const handleChange = (event) => {
    if (event.target.value === "") {
      return;
    } else if (event.target.value !== undefined) {
      if (event.target.id.split("-")[0] === "tenant") {
        setMoveOutData({
          ...moveOutData,
          userId:
            currentProperty?.ownerInfo?.tenant[event.target.attributes[3].value]
              ._id,
        });
      }
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (moveOutData.userId) {
        await moveUserOut({
          variables: {
            userId: moveOutData.userId,
            propertyId: moveOutData.propertyId,
          },
        });
        setMoveOutData({ userId: "" });
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  };

  //this will stop the component from rendering if the data is no available yet
  if (currentProperty?.ownerInfo?.tenant === undefined) {
    return null;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header">Choose a Tenant</h3>
      </div>
      <div className="card-body">
        <Autocomplete
          id="tenant-out-box"
          options={currentProperty?.ownerInfo?.tenant}
          getOptionLabel={(tenant) => tenant.firstName + " " + tenant.lastName}
          style={({ color: "var(--light)" }, { background: "white" })}
          renderInput={(params) => (
            <TextField {...params} label="Home" variant="outlined" />
          )}
          onChange={handleChange}
        />
        <div className="contentContainer" style={{ marginTop: "42px" }}>
          <button
            className="back-btn"
            onClick={handleSubmit}
            size="large"
            variant="contained"
            color="secondary"
            id="button-hover"
          >
            <HiUserRemove size={30} color="var(--light)"></HiUserRemove>
            <br />
            <b> &nbsp;Move Tenant Out</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoveUserOut;
