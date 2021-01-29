import React from "react";
import { Link } from "react-router-dom";

import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { BiMoveHorizontal } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";
// import { GrHostMaintenance } from "react-icons/gr";

import Button from "@material-ui/core/Button";

function AdminDash() {
  function showNavigation() {
    return (
      <div>
        <ul>
          <Button size="large" variant="contained" color="primary">
            <Link  to="/AdminDash/CreateUser">
              <b>CREATE</b> &nbsp;
              <FaUserCircle size={30} color="#fff"></FaUserCircle>{" "}
            </Link>
          </Button>

          <br />
          {/* <Button size="large" variant="contained" color="primary">
            <Link  to="/AdminDash/UpdateUser">
              <b>UPDATE</b> &nbsp;
              <FaUserEdit size={30} color="#fff"></FaUserEdit>{" "}
            </Link>
          </Button> */}
          {/* <Link  to="/AdminDash/UpdateUser">
            <FaUserEdit size={30} color="#2753BA"></FaUserEdit> &nbsp;Update
          </Link> */}
          <br />
          <Button size="large" variant="contained" color="primary">
            <Link  to="/AdminDash/CreateProperty">
              <b>CREATE</b> &nbsp;
              <BsHouseFill size={30} color="#fff"></BsHouseFill>
            </Link>
          </Button>
          {/* <Link  to="/AdminDash/CreateProperty">
            Create &nbsp;<BsHouseFill size={30} color="#2753BA"></BsHouseFill>
          </Link> */}
          <br />
          <br />
          <Button size="large" variant="contained" color="primary">
            <Link  to="/AdminDash/UpdateProperty">
              <b>UPDATE</b> &nbsp;
              <FaHouseDamage size={30} color="#fff"></FaHouseDamage>{" "}
            </Link>
          </Button>
          {/* <Link  to="/AdminDash/UpdateProperty">
            <FaHouseDamage size={30} color="#2753BA"></FaHouseDamage>{" "}
            &nbsp;Update
          </Link> */}
          <br />
          <br />
          <Button size="large" variant="contained" color="primary">
            <Link  to="/AdminDash/MoveUser">
              <b>TENANT</b> &nbsp;
              <BiMoveHorizontal
                size={30}
                color="#fff"
              ></BiMoveHorizontal>{" "}
            </Link>
          </Button>

          {/* <Link  to="/AdminDash/MoveUser">
            <BiMoveHorizontal size={30} color="#2753BA"></BiMoveHorizontal>{" "}
            &nbsp;Tenant{" "}
          </Link> */}
          {/* <br />
            <Link  to="/AdminDash/MaintenanceRequests">View Maintenance Requests </Link> */}
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
