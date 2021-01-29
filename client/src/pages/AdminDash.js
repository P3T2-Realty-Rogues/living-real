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
          
            <Link className="btn" to="/AdminDash/CreateUser"><FaUserCircle size={30} color="#2753ba"></FaUserCircle> &nbsp;Create User </Link>
            <br />
            <Link className="btn" to="/AdminDash/UpdateUser"><FaUserEdit size={30} color="#2753ba"></FaUserEdit> &nbsp;Update User </Link>
            <br />
            <Link className="btn" to="/AdminDash/CreateProperty"><BsHouseFill size={30} color="#2753ba"></BsHouseFill> &nbsp;Create Property </Link>
            <br />
            <Link className="btn" to="/AdminDash/UpdateProperty"><FaHouseDamage size={30} color="#2753ba"></FaHouseDamage> &nbsp;Update Property </Link>
            <br />
            <Link className="btn" to="/AdminDash/MoveUser"><BiMoveHorizontal size={30} color="#2753ba"></BiMoveHorizontal> &nbsp;Move Someone In </Link>
            <br />
            <Link className="btn" to="/AdminDash/MaintenanceRequests"><GrHostMaintenance size={30} color="#2753ba"></GrHostMaintenance> &nbsp;View Maintenance Requests  </Link>
          
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
