import React from "react";

function AdminDash() {
  return (
    <div className="container">
      <div className="options">
        <ul>
          <button>Add Tenant</button>
          <button>Update Tenant</button>
          <button>Remove Tenant</button>
          <button>Add Property</button>
          <button>Update Property</button>
          <button>Remove Property</button>
          <button>View Maintenance Requests</button>
        </ul>
      </div>
          <div className="admin-content">
              <h1> Content goes here</h1>
      </div>
          <div className="bulletin-board">
              <h1>Bulletin Board</h1>
      </div>
    </div>
  );
}

export default AdminDash;
