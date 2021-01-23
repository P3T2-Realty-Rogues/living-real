import React from "react";
import { Link } from "react-router-dom";
import { Menu, Header } from "semantic-ui-react";
import Auth from "../../utils/auth";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Menu widths={5}>
            <Menu.Item>
              <Link to="/AdminDash">Admin Dashboard </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/TenantDash">Tenant Dashboard </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/" onClick={() => Auth.logout()}>Logout </Link>
            </Menu.Item>
          </Menu>
        </>
      );
    } else {
      return (
        <Menu widths={5}>
          <Menu.Item>
            <Link to="/Login">Login </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/RequestInfo">Request Info </Link>
          </Menu.Item>
        </Menu>
      );
    }
    // return (
    //   //Original idea
    //   <div>
    //     <Menu widths={5}>
    //       <Menu.Item>
    //         <Link to="/Login">Login </Link>
    //       </Menu.Item>
    //       <Menu.Item>
    //         <Link to="/RequestInfo">Request Info </Link>
    //       </Menu.Item>
    //     </Menu>
    //   </div>

    // Option 2
    // <div>
    //     <Header>
    //       <Link to="/">Living Real</Link>
    //     </Header>

    //     <div class="ui four item  tiny menu ">
    //       <Link class="item" to="/AdminDash">Admin Dashboard </Link>
    //       <Link class="item" to="/TenantDash">Tenant Dashboard </Link>
    //       <Link class="item" to="/Login">Login </Link>
    //       <Link class="item active" to="/RequestInfo">Request Info </Link>
    //     </div>
    // </div>

    // Option 3
    // <div className="ui menu">
    //   <Link className="item" to="/">
    //     Living Real
    //   </Link>

    //   <div className="right menu">
    //     <div className="ui item">
    //       <Link className="item" to="/AdminDash">
    //         Admin Dashboard{" "}
    //       </Link>
    //       <Link className="item" to="/TenantDash">
    //         Tenant Dashboard{" "}
    //       </Link>
    //       <Link className="item" to="/Login">
    //         Login{" "}
    //       </Link>
    //       <Link className="item active" to="/RequestInfo">
    //         Request Info{" "}
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // );
  }

  return (
    <header className="flex-row px-1">
      <Header>
        <Link to="/">Living Real</Link>
      </Header>
      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
