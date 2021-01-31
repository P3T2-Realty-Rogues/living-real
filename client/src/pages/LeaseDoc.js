import React from "react";

function LeaseDoc() {

    return(
        <div className="card">
            <div className="card-header">
                <h3 className="card-header">
                    Lease Document
                </h3>
            </div>
            <div className = "card-body">
                <a href="https://drive.google.com/file/d/1s0VzqW0LTLrzxaDQUcN1g0aF7fqQ6S47/view?usp=sharing">Leasing Document</a>
                <div>
                    <img src={require=("../assets/images/lease-document")} />
                </div>
            </div>
        </div>
    )
}

export default LeaseDoc