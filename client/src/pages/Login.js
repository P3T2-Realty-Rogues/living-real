import React from "react";
// import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
// import { LOGIN } from "../utils/mutations";
// import Auth from "../utils/auth";

function Login(props) {
  //   const [formState, setFormState] = useState({ email: "", password: "" });
  //   const [login, { error }] = useMutation(LOGIN);

  //   const handleFormSubmit = async (event) => {
  //     event.preventDefault();
  //     try {
  //       const mutationResponse = await login({
  //         variables: { email: formState.email, password: formState.password },
  //       });
  //       const token = mutationResponse.data.login.token;
  //       Auth.login(token);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setFormState({
  //       ...formState,
  //       [name]: value,
  //     });
  //   };

  //   return (
  //     <div className="container my-1">
  //       <Link to="/signup">← Go to Signup</Link>

  //       <h2>Login</h2>
  //       <form onSubmit={handleFormSubmit}>
  //         <div className="flex-row space-between my-2">
  //           <label htmlFor="email">Email address:</label>
  //           <input
  //             placeholder="youremail@test.com"
  //             name="email"
  //             type="email"
  //             id="email"
  //             onChange={handleChange}
  //           />
  //         </div>
  //         <div className="flex-row space-between my-2">
  //           <label htmlFor="pwd">Password:</label>
  //           <input
  //             placeholder="******"
  //             name="password"
  //             type="password"
  //             id="pwd"
  //             onChange={handleChange}
  //           />
  //         </div>
  //         {error ? (
  //           <div>
  //             <p className="error-text">The provided credentials are incorrect</p>
  //           </div>
  //         ) : null}
  //         <div className="flex-row flex-end">
  //           <button type="submit">Submit</button>
  //         </div>
  //       </form>
  //     </div>
  //   );
  const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log("logging in");
  };

  return (
    <div className="card">
      <Link to="/signup">← Go to Signup</Link>
      <h2 className="card-header">Login</h2>
      <form  className="card-body" onSubmit={handleFormSubmit}>
        <div>
          <label className="form-label" htmlFor="email">Email address:</label>
          <input
          className="form-input"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="pwd">Password:</label>
          <input
          className="form-input"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
          />
        </div>
        {/* {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null} */}
        <div>
          <br />
          <button className="btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
