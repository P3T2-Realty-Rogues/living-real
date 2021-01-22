import React from "react";
import { Link } from "react-router-dom";
import { Menu, Header } from "semantic-ui-react";

function Nav() {
 

  function showNavigation() {
    return (
     //Original idea
      // <div>
 
      //     <Header>
      //       <Link to="/">Living Real</Link>
      //     </Header>

      //     <Menu widths={5}>
      //     <Menu.Item>
      //       <Link to="/AdminDash">Admin Dashboard </Link>
      //     </Menu.Item>
      //     <Menu.Item>
      //       <Link to="/TenantDash">Tenant Dashboard </Link>
      //     </Menu.Item>
      //     <Menu.Item>
      //       <Link to="/Login">Login </Link>
      //     </Menu.Item>
      //     <Menu.Item>
      //       <Link to="/RequestInfo">Request Info </Link>
      //     </Menu.Item> 
      //   </Menu>
      // </div>
      
      // Option 2
      <div>
          <Header>
            <Link to="/">Living Real</Link>
          </Header>

          <div class="ui four item tiny menu ">
            <Link class="item" to="/AdminDash">Admin Dashboard </Link>
            <Link class="item" to="/TenantDash">Tenant Dashboard </Link>
            <Link class="item" to="/Login">Login </Link>
            <Link class="item active" to="/RequestInfo">Request Info </Link>
          </div>
      </div>
            
      // Option 3
    //   <div class="ui menu">

    //     <Link class="item" to="/">Living Real</Link>

    //     <div class="right menu">
    //       <div class="ui item">
    //         <Link class="item" to="/AdminDash">Admin Dashboard </Link>
    //         <Link class="item" to="/TenantDash">Tenant Dashboard </Link>
    //         <Link class="item" to="/Login">Login </Link>
    //         <Link class="item active" to="/RequestInfo">Request Info </Link>
    //       </div>
    //     </div>
    //   </div>
    );
  }

  return (
    <header className="flex-row px-1">
      {/* < h1>
        <Link to="/"> In A Virtual World</Link>
       </h1> */}

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
