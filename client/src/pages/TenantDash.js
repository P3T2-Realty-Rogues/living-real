import React from "react";
import { Link } from "react-router-dom";
import { Menu, Header } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USERS } from "../utils/queries";
import Auth from "../utils/auth";

function TenantDash() {
  // const loggedUser = Auth.getProfile();

  // console.log("LOGGED USER", loggedUser);
  const { data } = useQuery(QUERY_USERS);

  console.log("USER", data);

  let user;
  if (data) {
    user = data.user;
  }

  function showNavigation() {
    return (
      <div>
        <Menu widths={2}>
          <Menu.Item>
            <Link to="/TenantDash/TenantInfo">My Information </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/TenantDash/MaintenanceRequests">
              View Maintenance Re quests{" "}
            </Link>
          </Menu.Item>
        </Menu>
      </div>
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

export default TenantDash;
