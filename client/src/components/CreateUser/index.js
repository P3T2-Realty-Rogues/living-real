import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

function CreateUser() {
  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        phoneNumber: formState.phoneNumber,
        adminFlag: document.getElementById("checkbox").checked,
      },
    });
    // const token = mutationResponse.data.addUser.token;
    // Auth.login(token);
    window.location.replace("/AdminDash");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header">Add a User</h3>
      </div>
      <form className="card-body" onSubmit={handleFormSubmit}>
        <div className="">
          <label className="form-label" htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="John"
            name="firstName"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="lastName" className="form-label">
            <b>Last Name</b>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Smith"
            name="lastName"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="email">
            <b>Email Address</b>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="example@domain.com"
            name="email"
            onChange={handleChange}
          ></input>
        </div>
        <div >
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="password"
            name="password"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="phoneNumber">
            <b>Phone Number</b>
          </label>
          <input
            className="form-input"
            type="tel"
            placeholder="555-555-5555"
            name="phoneNumber"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="adminFlag">
            <b>Administrator</b>
          </label>
          <input
            className="form-input"
            type="checkbox"
            placeholder="false"
            name="adminFlag"
            id="checkbox"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <br />
          <button className="create-btn">Create User</button>
          <br />
          <Link to="/AdminDash" className="back-btn">
            Back to Dashboard
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
