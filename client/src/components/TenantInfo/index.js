import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../utils/auth";
import { QUERY_USERS } from "../../utils/queries";
import toTitleCase from "../../utils/helpers"

function TenantInfo() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  //   const users = useQuery(QUERY_USERS);

  const loggedUser = Auth.getProfile();
  const currentUserId = loggedUser.data._id;

  console.log("user id from auth", currentUserId);
  console.log("STATE", state);

  const currentUser = state.users.find(({ _id }) => _id === currentUserId);
  console.log("current User", currentUser);

  // useEffect(() => {
  //     if (users.data) {
  //     dispatch({
  //       type: ADD_USER,
  //       users: users.data.users,
  //     });
  // }

  // })
  return (
    <div>
      <header>
        <h1>Lease Information</h1>
        <h2>
          {toTitleCase(currentUser?.firstName)} &nbsp;
          {toTitleCase(currentUser?.lastName)}
        </h2>
        {/* <img>tenant image</img> */}
        <ul>
          <li>Address</li>
          <li>Email: {currentUser?.email}</li>
          <li>Phone: {currentUser?.phoneNumber}</li>
        </ul>
      </header>
      <div>
        <p>
          Lease Start:&nbsp;
          {currentUser?.tenantData.leaseDate}
        </p>
        <a href="/">Lease Document</a>
      </div>
    </div>
  );
}

export default TenantInfo;
