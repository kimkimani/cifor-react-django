import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../css/style.css";

export const Login = () => {
  const [state, setstate] = useState([]);
  async function loginUser(credentials) {
    return fetch("https://icraf-interview-wmugc.ondigitalocean.app/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const onChange = (event) => {
    setstate({
      ...state,
      error: false,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser(state)
      .then((data) => {
        if (data.error) {
          setstate({ ...state, error: data.error });
        } else {
          localStorage.setItem("user", JSON.stringify(data));
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">
              Please sign in
            </h1>
            <div className="form-group">
              <label htmlFor="username">username</label>
              <input
                type="username"
                className="form-control"
                name="username"
                placeholder="Enter username"
                value={state.username}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={state.password}
                onChange={onChange}
              />
              <div id="error" className="form-text login-error text-danger">
                {state.error}
              </div>
            </div>

            <div className="login-btn">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block  "
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
