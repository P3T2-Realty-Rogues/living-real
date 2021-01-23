import React from "react";
import { Link } from "react-router-dom";


function AdminDash() {

  function showNavigation() {
    return (
      <div>
        <ul>
          
            <Link className="btn" to="/AdminDash/CreateUser">Create User </Link>
            <br />
            <Link className="btn" to="/AdminDash/UpdateUser">Update User </Link>
            <br />
            <Link className="btn" to="/AdminDash/CreateProperty">Create Property </Link>
            <br />
            <Link className="btn" to="/AdminDash/UpdateProperty">Update Property </Link>
            <br />
            <Link className="btn" to="/AdminDash/MaintenanceRequests">View Maintenance Requests </Link>
          
        </ul>

      </div>
    );
  }

  return (
    <div className="flex-row">
      <header>
        <div>{showNavigation()}</div>
      </header>

      <div >
        <h1> Content goes here</h1>
      </div>
      <div>
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
