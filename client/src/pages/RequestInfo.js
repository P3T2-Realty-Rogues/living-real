import React from "react";

import { VscRequestChanges } from "react-icons/vsc";

function RequestInfo(props) {
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Signing Up");
  };

  return (
    <div className="card">
      <h2 className="card-header">Request More Information</h2>
      <form className="card-body" onSubmit={handleFormSubmit}>
        <div>
          <label className="form-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="form-input"
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="form-input"
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div>
          <br />
          <button className="create-btn" id="button-hover" type="submit">
            <VscRequestChanges
              size={30}
              color="var(--light)"
            ></VscRequestChanges>
            <br /> <b>Submit</b>
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequestInfo;
