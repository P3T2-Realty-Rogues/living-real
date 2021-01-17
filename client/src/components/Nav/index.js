import React from "react";
import { Link } from "react-router-dom";


function Nav() {

  return (
    <div>
      <Link to="/Login">Login </Link>
      <Link to="/Signup">Signup </Link>
    </div>
  );

}

export default Nav;
