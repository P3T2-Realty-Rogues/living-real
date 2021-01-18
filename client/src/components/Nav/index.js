import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    return (
      <div>
        <div>
          <Link to="/AdminDash">Admin Dashboard </Link>
          <Link to="/Login">Login </Link>
          <Link to="/Signup">Signup </Link>
        </div>
      </div>
    );
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          Living Real
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
