import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_PROPERTIES } from "../utils/queries";
import { useParams } from "react-router-dom";
import {
  REMOVE_PROPERTY,
  UPDATE_PROPERTIES,
  UPDATE_PROPERTY,
} from "../utils/actions";
import { DELETE_PROPERTY, UPDATE_PROPERTY_DATA } from "../utils/mutations";

import { RiDeleteBinLine } from "react-icons/ri";
import { VscRequestChanges } from "react-icons/vsc";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

function UpdatePropertyForm(props) {
  const { id } = useParams();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentProperty, setCurrentProperty] = useState({});

  const [updatedProperty, setUpdatedProperty] = useState({});

  const [deletedProperty, setDeletedProperty] = useState({ propertyId: id });

  const { loading, data } = useQuery(QUERY_PROPERTIES);

  const { properties } = state;

  const [updateProperty] = useMutation(UPDATE_PROPERTY_DATA);

  const [deleteProperty] = useMutation(DELETE_PROPERTY);

  useEffect(() => {
    // already in global store
    if (properties.length) {
      setCurrentProperty(properties.find((property) => property._id === id));
      setUpdatedProperty(properties.find((property) => property._id === id));
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
    } else if (data) {
      dispatch({
        type: REMOVE_PROPERTY,
        properties: data.property._id,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProperty({
      ...updatedProperty,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await updateProperty({
      variables: {
        propertyId: updatedProperty._id,
        propertyName: updatedProperty.propertyName,
        rent: parseInt(updatedProperty.rent),
        petDeposit: parseInt(updatedProperty.petDeposit),
        renterDeposit: parseInt(updatedProperty.renterDeposit),
        appFee: parseInt(updatedProperty.appFee),
      },
    });
    setUpdatedProperty(data.updateProperty);
    dispatch({
      type: UPDATE_PROPERTY,
      updatedProperty: updatedProperty,
      properties: properties,
    });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteProperty({
        variables: {
          _id: deletedProperty.propertyId,
        },
      });
      setDeletedProperty({ propertyId: "" });
      props.history.push("/AdminDash");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="col-auto flex-row" onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-header">{updatedProperty?.propertyName}</h3>
        </div>

        <div className="card-body">
          <div>
            <label className="form-label" htmlFor="propertyName">
              <b>Home Name</b>
            </label>
            <input
              className="form-input"
              type="text"
              value={updatedProperty?.propertyName}
              name="propertyName"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label" htmlFor="rent">
              <b>Rent</b>
            </label>
            <input
              className="form-input"
              type="text"
              value={updatedProperty?.rent}
              name="rent"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label" htmlFor="petDeposit">
              <b>Pet Deposit</b>
            </label>
            <input
              className="form-input"
              type="text"
              value={updatedProperty?.petDeposit}
              name="petDeposit"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label" htmlFor="renterDeposit">
              <b>Renter Deposit</b>
            </label>
            <input
              className="form-input"
              type="text"
              value={updatedProperty?.renterDeposit}
              name="renterDeposit"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label className="form-label" htmlFor="appFee">
              <b>App Fee</b>
            </label>
            <input
              className="form-input"
              type="text"
              value={updatedProperty?.appFee}
              name="appFee"
              onChange={handleChange}
            ></input>
            <br />
            <button
              className="create-btn"
              id="button-hover"
              onClick={handleSubmit}
              type="submit"
              size="large"
              variant="contained"
              color="secondary"
            >
              <VscRequestChanges
                size={30}
                color="var(--light)"
              ></VscRequestChanges>
              <br />
              <b>Update</b>
            </button>
            <button
              className="back-btn"
              id="button-hover"
              onClick={handleDelete}
              type="submit"
              size="large"
              variant="contained"
              color="secondary"
            >
              <RiDeleteBinLine size={30} color="var(--light)"></RiDeleteBinLine>
              <br />
              <b>Delete</b>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdatePropertyForm;
