import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
// import { QUERY_USER } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/actions";
import { QUERY_USERS } from "../../utils/queries";
// import toTitleCase from "../../utils/helpers";
// import { useQuery } from "@apollo/react-hooks";

function TenantInfo() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  // const loggedUser = Auth.getProfile();
  // const currentUserId = loggedUser.data._id;

  const [currentUser, setCurrentUser] = useState({});

  const { data } = useQuery(QUERY_USERS);
  const { users } = state;

  console.log("USER", users);
  // console.log("user id from auth", currentUserId);
  // console.log("STATE", state);

  // const currentUser = users.find(({ _id }) => _id === id);
  console.log("current User", currentUser);

  useEffect(() => {
    if (users.length) {
      setCurrentUser(users.find((user) => user._id === id));
      // if we dont have data, we use the data from the useQuery to set the data to global state
    } else if (data) {
      console.log("data", data);
      dispatch({
        type: UPDATE_USER,
        users: data.users,
      });
    }
    console.log("data outside if", data);
  }, [users, data, id, dispatch]);

  return (
    <div className="card">
      <header>
        <h1 className="card-header">Lease Information</h1>
      </header>
      <div className="card-body">
        <h2>
          {currentUser?.firstName} &nbsp;
          {currentUser?.lastName}
        </h2>
        {/* <img>tenant image</img> */}
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
