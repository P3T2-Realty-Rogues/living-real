import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "../../utils/auth";
import { QUERY_USERS } from "../../utils/queries";

function TenantInfo() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
//   const users = useQuery(QUERY_USERS);

    const loggedUser = Auth.getProfile();
    const currentUserId = loggedUser.data;

    console.log("user id from auth", currentUserId);
    console.log("STATE", state);
    
    const currentUser = state.users.find(
        ({ _id }) => _id === currentUserId
        );
        console.log("current", currentUser);

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
        <h1>
          {/* {currentUser.firstName} {currentUser.lastName} */}
        </h1>
        {/* <img>tenant image</img> */}
        <ul>
          <li>Address</li>
          <li>Email</li>
          <li>Phone</li>
        </ul>
      </header>
      <div>
        <h2>Lease Information</h2>
        <p>Lease Date</p>
        <a href="/">Lease Document</a>
      </div>
    </div>
  );
}

export default TenantInfo;
