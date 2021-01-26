import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { UPDATE_USER } from "../../utils/actions";
import { QUERY_USERS } from "../../utils/queries";
import toTitleCase from "../../utils/helpers";
import Auth from "../../utils/auth";

function TenantInfo() {
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const { id } = useParams();

  // const [currentUser, setCurrentUser] = useState({});

  // const { data } = useQuery(QUERY_USERS);
  // const { users } = state;

  // useEffect(() => {
  //   if (users.length) {
  //     setCurrentUser(users.find((user) => user._id === id));
  //     // if we dont have data, we use the data from the useQuery to set the data to global state
  //   } else if (data) {
  //     dispatch({
  //       type: UPDATE_USER,
  //       users: data.users,
  //     });
  //   }
   
  // }, [users, data, id, dispatch]);

  const currentUser = Auth.getProfile().data

  console.log("CURRENT USER", currentUser);

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
          <li>Address: {currentUser?.property?.streetAddress}</li>
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
          >
            Lease Document
          </a>
          <Link to="/TenantDash/MaintenanceRequests">
            <div className="btnNav">View Maintenance Requests </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TenantInfo;
