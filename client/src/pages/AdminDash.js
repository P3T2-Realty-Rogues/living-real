import React from "react";
import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { BiMoveHorizontal } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";

function AdminDash() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header">Manage your Tenants and Properties</h3>
      </div>
      <div className="card-body">
        <button className="btnNav" id="button-hover">
          <Link to="/AdminDash/CreateUser">
            <FaUserCircle size={30} color="var(--primary)"></FaUserCircle>{" "}
            <br />
            <b>Create User</b>
          </Link>
        </button>
        <br />
        <br />
        <button className="btnNav" id="button-hover">
          <Link to="/AdminDash/CreateProperty">
            <BsHouseFill size={30} color="var(--primary)"></BsHouseFill>
            <br />
            <b>Create Property</b>
          </Link>
        </button>
        <br />
        <br />
        <button className="btnNav" id="button-hover">
          <Link to="/AdminDash/UpdateProperty">
            <FaHouseDamage size={30} color="var(--primary)"></FaHouseDamage>{" "}
            <br />
            <b>Update Properties</b>
          </Link>
        </button>
        <br />
        <br />
        <button className="btnNav" id="button-hover">
          <Link to="/AdminDash/MoveUser">
            <BiMoveHorizontal
              size={30}
              color="var(--primary)"
            ></BiMoveHorizontal>{" "}
            <br />
            <b>Move Tenant</b>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default AdminDash;
