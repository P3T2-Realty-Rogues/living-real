import React from "react";
import {Link} from "react-router-dom";

function LeaseDoc() {

    return (
        <div className="card">
            <header>
                <h1 className="card-header">Lease Document</h1>
            </header>

            <div className="card-body">
                <a className="btnNav  id=button-hover"  href="https://drive.google.com/file/d/1s0VzqW0LTLrzxaDQUcN1g0aF7fqQ6S47/view?usp=sharing" target="_blank" rel="noopener noreferrer">View on Google</a>

                 <div>
                   <img src={require(`../assets/images/lease-document.jpg`)} />
                </div>
            </div>
        </div>
    )
}

export default LeaseDoc