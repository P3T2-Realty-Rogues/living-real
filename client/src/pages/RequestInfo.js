import React from "react";
import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/react-hooks";
// import Auth from "../utils/auth";
// import { ADD_USER } from "../utils/mutations";

function RequestInfo(props) {

    const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Signing Up");
    };
    
  return (
    <div className="card">
      <Link to="/login">← Go to Login</Link>
      <h2 className="card-header">Request More Information</h2>
      <form className="card-body" onSubmit={handleFormSubmit}>
        <div>
          <label className="form-label" htmlFor="firstName">First Name:</label>
          <input
          className="form-input"
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="lastName">Last Name:</label>
          <input
          className="form-input"
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="email">Email:</label>
          <input
          className="form-input"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            // onChange={handleChange}
          />
        </div>
        <div>
          <br />
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RequestInfo;
