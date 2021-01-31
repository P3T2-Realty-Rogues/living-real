import React from "react";

function LeaseDoc() {

    return(
        <div className="card">
            <header>
                <h1 className="card-header">Lease Document</h1>
            </header>

            <div className = "card-body">
                {/* <a href="https://drive.google.com/file/d/1s0VzqW0LTLrzxaDQUcN1g0aF7fqQ6S47/view?usp=sharing">Leasing Document</a> */}
                <div>
                    <img src={require(`../assets/images/lease-document.jpg`)} />
                    {/* <img src="../assets/images/lease-document.jpg" /> */}
                </div>
            </div>
        </div>
    )
}

export default LeaseDoc