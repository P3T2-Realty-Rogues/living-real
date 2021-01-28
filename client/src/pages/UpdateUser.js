import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USERS } from "../utils/queries";
import { UPDATE_USER } from "../utils/actions";

//import the idb helper to make transactions with the database
import { idbPromise } from "../utils/helpers"; 

function UpdateUser() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state)

  const [allUsers, setAllUsers] = useState([])

  const { loading, data } = useQuery(QUERY_USERS)
  const { users } = state

    console.log("state", state)

  useEffect(() => {
    // already in global store
    if (users.length) {
      setAllUsers(users);
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_USER,
        Users: data.Users
      });

    //   data.users.forEach((user) => {
    //     idbPromise('Users', 'put', user);
    //   });
    }
    // get cache from idb
    // else if (!loading) {
    //   idbPromise('Users', 'get').then((indexedUsers) => {
    //     dispatch({
    //       type: UPDATE_USER,
    //       Users: indexedUsers
    //     });
    //   });
    // }
  }, [users, data, loading, dispatch]);

  return (
    <div>
      <div>
        <div className="table">
          <p>&nbsp;</p>
          {/* user details and amenities */}
          <table className="ui striped  collapsing table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((user, index) => (
                <tr>
                  <td>
                    <button
                      className="btn"
                      id={user.userName
                        .toLowerCase()
                        .replace(/\s/g, "")}
                    >
                      <Link to={`/AdminDash/Updateuser/${user._id}`}> Edit </Link>
                    </button>
                  </td>
                  <td>{user.userName}</td>
                  <td>{user.streetAddress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div>
            <br />
            <button className="btnNav" id="update-user">Update user</button>
            <button className="btnNav" id="delete-user">Delete user</button>
            <Link to="/AdminDash" className="btnNav">Back to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;