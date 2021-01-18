import React from "react";


function TenantDash() {
    return (
        <div>
            <header>
                <h1>Tenant Name</h1>
                {/* <img>tenant image</img> */}
                <ul>
                    <li>Address</li>
                    <li>Email</li>
                    <li>Phone</li>
                </ul>
            </header>
            <div>
                <h2>Lease Information</h2>
                <p>Lease Date</p>
                <a href="/">Lease Document</a>
            </div>
        </div>
    )
}

export default TenantDash;