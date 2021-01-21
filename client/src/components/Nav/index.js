import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Nav() {
 

  function showNavigation() {
    return (
      <div>
        <Menu widths={4}>
          <Menu.Item><Link to="/AdminDash">Admin Dashboard </Link></Menu.Item>
          <Menu.Item><Link to="/TenantDash">Tenant Dashboard </Link></Menu.Item>
          <Menu.Item><Link to="/Login">Login </Link></Menu.Item>
          <Menu.Item><Link to="/RequestInfo">Request Info </Link></Menu.Item>
        </Menu>
      </div>
    );
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">Living Real, In A Virtual World</Link>
       </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
