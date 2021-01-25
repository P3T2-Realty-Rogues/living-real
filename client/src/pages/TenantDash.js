import React from "react";
import { Link } from "react-router-dom";
import { Menu, Header } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_USERS } from "../utils/queries";
import TenantInfo from "../components/TenantInfo";

function TenantDash() {
  // console.log("LOGGED USER", loggedUser);
  const { data } = useQuery(QUERY_USERS);

  // console.log("USER", data);

  let user;
  if (data) {
    user = data.user;
  }

  function showNavigation() {
    return (
      <div>
        <Menu widths={1}>
          <Menu.Item>
            <Link to="/TenantDash/MaintenanceRequests">
              View Maintenance Requests{" "}
            </Link>
          </Menu.Item>
        </Menu>
        <TenantInfo />
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
