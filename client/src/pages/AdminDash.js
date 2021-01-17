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
          <button>View Maintenace Requests</button>
          <button></button>
          <button></button>
        </ul>
      </div>
      <div className="admin-content"></div>
      <div className="bulletin-board"></div>
    </div>
  );
}

export default AdminDash;
