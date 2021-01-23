import React from "react";
import { Link } from "react-router-dom";
import { Menu, Header } from "semantic-ui-react";
import CreateUser from '../components/CreateUser'
import CreateProperty from '../components/CreateProperty'

function AdminDash() {

  function showNavigation() {
    return (
      <div>
        <Menu widths={5}>

          <Menu.Item>
            <Link to="/AdminDash/CreateUser">Create User </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/AdminDash/UpdateUser">Update User </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/AdminDash/CreateProperty">Create Property </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/AdminDash/UpdateProperty">Update Property </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/AdminDash/MaintenanceRequests">View Maintenance Re quests </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }

  return (
    <div>
      <header className="flex-row px-1">
        {/* < h1>
          <Link to="/"> In A Virtual World</Link>
         </h1> */}

        <nav>{showNavigation()}</nav>
      </header>

      <div className="admin-content">
        <h1> Content goes here</h1>
      </div>
      <div className="bulletin-board">
        <h1>Bulletin Board</h1>
      </div>
    </div>
  );


  // <div className="container">
  //   <div className="options">
  //     <ul>
  //       <button>Add Tenant</button>
  //       <button>Update Tenant</button>
  //       <button>Remove Tenant</button>
  //       <button>Add Property</button>
  //       <button>Update Property</button>
  //       <button>Remove Property</button>
  //       <button>View Maintenance Requests</button>
  //     </ul>

  // </div>
  // );
}

export default AdminDash;
