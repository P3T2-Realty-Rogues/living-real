import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import Auth from "../../utils/auth"
import { QUERY_PROPERTIES } from "../../utils/queries";
import { UPDATE_PROPERTIES} from "../../utils/actions";
import toTitleCase from "../../utils/helpers"
//import the idb helper to make transactions with the database
import { idbPromise } from "../../utils/helpers";
import {GrHostMaintenance} from "react-icons/gr";
import {CgFileDocument} from "react-icons/cg";  


function TenantInfo() {
  const currentUser = Auth.getProfile().data
  const propertyId = currentUser.property

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [currentProperty, setCurrentProperty] = useState({})

  const { loading, data } = useQuery(QUERY_PROPERTIES);

  const {properties} = state

  useEffect(() => {
    // already in global store
    if (properties.length) {
      setCurrentProperty(properties.find(property => property._id === propertyId));
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
  }, [properties, data, loading, dispatch, propertyId]);

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
          <a
            className="btnNav"
            href="https://drive.google.com/file/d/1s0VzqW0LTLrzxaDQUcN1g0aF7fqQ6S47/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            Lease Document &nbsp;<CgFileDocument size={30} color="#2753ba"></CgFileDocument>
          </a>
          <Link to="/TenantDash/MaintenanceRequests">
            <div className="btnNav">View Maintenance Requests &nbsp;<GrHostMaintenance size={30} color="#2753ba"></GrHostMaintenance></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TenantInfo;
