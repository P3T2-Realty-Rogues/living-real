import React from "react";
import { Link } from "react-router-dom";
import { Menu, Header } from "semantic-ui-react";
import Auth from "../../utils/auth";
import { useSelector } from "react-redux";

function Nav() {
  const state = useSelector((state) => state);
  // let isAdmin;

  //console.log("NAV STATE", state);

  function showNavigation() {
    if (Auth.loggedIn()) {
      //wrap this as function and add it as a method in helpers.js
      const loggedUser = Auth.getProfile();
      const currentUserId = loggedUser.data._id;

      const currentUser = state.users.find(({ _id }) => _id === currentUserId);

      return (
        <>
          <Menu widths={2}>
            {/* optional chaining here to optionally do this if currentUser exists
            so when the asynchronous code executes and currentUsers exists,
            we will conditionally render the admin or tenant dash */}
            {currentUser?.adminFlag ? (
              <Menu.Item>
                <Link to="/AdminDash">Admin Dashboard </Link>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <Link to={`/TenantDash/${currentUser?._id}`}>Tenant Dashboard </Link>
              </Menu.Item>
            )}
            <Menu.Item>
              <Link to="/" onClick={() => Auth.logout()}>
                Logout{" "}
              </Link>
            </Menu.Item>
          </Menu>
        </>
      );
    } else {
      return (
        <Menu widths={2}>
          <Menu.Item>
            <Link to="/Login">Login </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/RequestInfo">Request Info </Link>
          </Menu.Item>
        </Menu>
      );
    }
  
  }

  return (
    <header className="justify-center px-1">
      <Header>
        <Link to="/"><h1 className="title">Living Real</h1></Link>
      </Header>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
