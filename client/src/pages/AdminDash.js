import React from "react";
import { Link } from "react-router-dom";
import {FaUserCircle, FaUserEdit} from "react-icons/fa";
import {BiMoveHorizontal} from "react-icons/bi";
import {BsHouseFill} from "react-icons/bs";
import {FaHouseDamage} from "react-icons/fa";
import {GrHostMaintenance} from "react-icons/gr";


function AdminDash() {

  function showNavigation() {
    return (
      <div>
        <ul>
          
            <Link className="btn" to="/AdminDash/CreateUser">Create User &nbsp;<FaUserCircle size={30} color="#2753ba"></FaUserCircle></Link>
            <br />
            <Link className="btn" to="/AdminDash/UpdateUser">Update User &nbsp;<FaUserEdit size={30} color="#2753ba"></FaUserEdit></Link>
            <br />
            <Link className="btn" to="/AdminDash/CreateProperty">Create Property &nbsp;<BsHouseFill size={30} color="#2753ba"></BsHouseFill></Link>
            <br />
            <Link className="btn" to="/AdminDash/UpdateProperty">Update Property &nbsp;<FaHouseDamage size={30} color="#2753ba"></FaHouseDamage></Link>
            <br />
            <Link className="btn" to="/AdminDash/MoveUser">Move Someone In &nbsp;<BiMoveHorizontal size={30} color="#2753ba"></BiMoveHorizontal></Link>
            <br />
            <Link className="btn" to="/AdminDash/MaintenanceRequests">View Maintenance Requests  &nbsp;<GrHostMaintenance size={30} color="#2753ba"></GrHostMaintenance></Link>
          
        </ul>

      </div>
    );
  }

  return (
    <div className="flex-row">
      <header>
        <div>{showNavigation()}</div>
      </header>

      {/* <div >
        <h1> Content goes here</h1>
      </div>
      <div>
        <h1>Bulletin Board</h1>
      </div> */}
    </div>
  );

}

export default AdminDash;
