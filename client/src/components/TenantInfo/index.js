import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../utils/auth";
import { useParams } from "react-router-dom";
// import { QUERY_USER } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/actions";
// import toTitleCase from "../../utils/helpers";
// import { useQuery } from "@apollo/react-hooks";

function TenantInfo() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  const loggedUser = Auth.getProfile();
  const currentUserId = loggedUser.data._id;

  const { users } = state;
  // const [currentUser, setCurrentUser] = useState({});
  console.log("CURRENT USER", users);
  // console.log("user id from auth", currentUserId);
  // console.log("STATE", state);

  const currentUser = users.find(({ _id }) => _id === currentUserId);
  console.log("current User", currentUser);

  useEffect(() => {
    // if (users.length) {
    //   setCurrentUser(users.find(({ _id }) => _id === currentUserId));
    //   // if we dont have data, we use the data from the useQuery to set the data to global state
    // }
    if (users.data) {
      dispatch({
        type: UPDATE_USER,
        user: users.data.users,
      });
    }
  }, [users]);

  return (
    <div>
      <header>
        <h1>Lease Information</h1>
        <h2>
          {currentUser?.firstName} &nbsp;
          {currentUser?.lastName}
        </h2>
        {/* <img>tenant image</img> */}
        <ul className="tenant-info">
          <li>Address: {currentUser?.property.streetAddress}</li>
          <li>Email: {currentUser?.email}</li>
          <li>Phone: {currentUser?.phoneNumber}</li>
        </ul>
      </header>
      <div>
        <p>
          Lease Start:&nbsp;
          {currentUser?.tenantData.leaseDate}
        </p>
        <a href="https://drive.google.com/file/d/1s0VzqW0LTLrzxaDQUcN1g0aF7fqQ6S47/view?usp=sharing">
          Lease Document
        </a>
      </div>
    </div>
  );
}

export default TenantInfo;
