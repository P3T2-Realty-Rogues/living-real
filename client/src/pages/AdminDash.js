import React from "react";
import { Link } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { BiMoveHorizontal } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";
// import { GrHostMaintenance } from "react-icons/gr";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function AdminDash() {
  function showNavigation() {
    return (
      <div>
        <ul>
          <div>
            <Grid container spacing={4}>
              <Grid item md={6}>
                <div>
                  <Button size="large" variant="contained" color="primary">
                    <Link to="/AdminDash/CreateUser">
                      <b className="admin-btn">CREATE</b> &nbsp;
                      <FaUserCircle size={30} color="#fff"></FaUserCircle>{" "}
                    </Link>
                  </Button>
                </div>
              </Grid>
              <Grid item md={6}>
                <div>
                  <Button size="large" variant="contained" color="primary">
                    <Link to="/AdminDash/CreateProperty">
                      <b className="admin-btn">CREATE</b> &nbsp;
                      <BsHouseFill size={30} color="#fff"></BsHouseFill>
                    </Link>
                  </Button>
                </div>
              </Grid>
              <Grid item md={6}>
                <div>
                  <Button size="large" variant="contained" color="primary">
                    <Link to="/AdminDash/UpdateProperty">
                      <b className="admin-btn">UPDATE</b> &nbsp;
                      <FaHouseDamage
                        size={30}
                        color="#fff"
                      ></FaHouseDamage>{" "}
                    </Link>
                  </Button>
                </div>
              </Grid>
              <Grid item md={6}>
                <div>
                  <Button size="large" variant="contained" color="primary">
                    <Link to="/AdminDash/MoveUser">
                      <b className="admin-btn">TENANT</b> &nbsp;
                      <BiMoveHorizontal
                        size={30}
                        color="#fff"
                      ></BiMoveHorizontal>{" "}
                    </Link>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>

          {/* <br />
            <Link  to="/AdminDash/MaintenanceRequests">View Maintenance Requests </Link> */}
        </ul>
      </div>
    );
  }

  return (
    <>
      <div>{showNavigation()}</div>
      {/* <div >
        <h1> Content goes here</h1>
      </div>
      <div>
        <h1>Bulletin Board</h1>
      </div> */}
    </>
  );
}

export default AdminDash;
