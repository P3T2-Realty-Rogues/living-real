import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

import Button from "@material-ui/core/Button";
import { AiOutlineSend } from "react-icons/ai";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <h2 className="card-header">Login</h2>
      <form className="card-body" onSubmit={handleFormSubmit}>
        <div>
          <label className="form-label" htmlFor="email">
            Email address:
          </label>
          <input
            className="form-input"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="pwd">
            Password:
          </label>
          <input
            className="form-input"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div>
          <br />
          <Button type="submit" size="large" variant="contained" color="green">
           Login &nbsp; <AiOutlineSend size={30} color="default"></AiOutlineSend>{" "}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
