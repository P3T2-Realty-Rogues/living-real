import React from "react";
import { Link } from "react-router-dom";
import { Menu, Header } from "semantic-ui-react";

function TenantDash() {

        function showNavigation() {
            return (
              <div>
                    <Link className="btn" to="/TenantDash/TenantInfo">My Information </Link>
                    <Link className="btn" to="/TenantDash/MaintenanceRequests">View Maintenance Requests </Link>
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