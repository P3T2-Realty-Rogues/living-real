import React from 'react';
import { Link } from "react-router-dom";

function CreateUser() {
  return(
      <div className="card">
          <div className="card-header">
          <h3 className="card-header">Add a User</h3>
          </div>
          <form className="card-body">
            <div className="">
            <label className="form-label" for="firstName"><b>First Name</b></label>
            <input className="form-input" type="text" placeholder="John" name="firstName"></input>
            </div>
            <div>
            <label for="lastName" className="form-label"><b>Last Name</b></label>
            <input className="form-input" type="text" placeholder="Smith" name="lastName"></input>
            </div>
            <div>
            <label for="email"><b>Email Address</b></label>
            <input className="form-input" type="text" placeholder="example@domain.com" name="email"></input>
            </div>
            <div>
            <label for="leaseDate"><b>Lease Date</b></label>
            <input className="form-input" type="text" placeholder="01/01/0101" name="date"></input>
            </div>
            <div>
                <br />
                <button className="btn">Create User</button>
                <br />
                <Link to="/AdminDash" className="btn">Back to Dashboard</Link>
            </div>
          </form>
          
      </div>
  );
}

export default CreateUser