import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PROPERTIES } from "../utils/queries";
import { UPDATE_PROPERTIES } from "../utils/actions";

import {AiOutlineEdit} from "react-icons/ai"; 
import {RiArrowGoBackLine} from "react-icons/ri";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers";

function UpdateProperty() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [allProperties, setAllProperties] = useState([])

  const { loading, data } = useQuery(QUERY_PROPERTIES);

  const {properties} = state

  useEffect(() => {
    // already in global store
    if (properties.length) {
      setAllProperties(properties);
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PROPERTIES,
        properties: data.properties
      });

      data.properties.forEach((property) => {
        idbPromise('properties', 'put', property);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('properties', 'get').then((indexedProperties) => {
        dispatch({
          type: UPDATE_PROPERTIES,
          properties: indexedProperties
        });
      });
    }
  }, [properties, data, loading, dispatch]);

  return (
    <div>
      <div>
        <div className="table">
          <p>&nbsp;</p>
          {/* Property details and amenities */}
          <table className="ui striped  collapsing table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {allProperties.map((property, index) => (
                <tr>
                  <td>
                    <button
                      className="btn"
                      id={property.propertyName
                        .toLowerCase()
                        .replace(/\s/g, "")}
                    >
                      <Link to={`/AdminDash/UpdateProperty/${property._id}`}> Edit &nbsp;<AiOutlineEdit size={30} color="#2753ba"></AiOutlineEdit></Link>
                    </button>
                  </td>
                  <td>{property.propertyName}</td>
                  <td>{property.streetAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div>
            <br />
            {/* <button className="btnNav" id="update-user">Update Property</button>
            <button className="btnNav" id="delete-user">Delete Property</button> */}
            <Link to="/AdminDash" className="btnNav"><RiArrowGoBackLine size={30} color="#2753ba"></RiArrowGoBackLine> &nbsp;Back to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProperty;
