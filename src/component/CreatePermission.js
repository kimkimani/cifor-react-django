import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { isAuthenticated } from "../apis/apis";
// import "../css/style.css";

export const CreatePermission = () => {
  const [state, setstate] = useState([]);
  const [contentType, setcontentType] = useState([]);

  const token = isAuthenticated().token;

  async function listRoles() {
    return fetch(
      "https://icraf-interview-wmugc.ondigitalocean.app/list-content-types",
      {
        method: "GET",
        headers: { Authorization: `token ${token}` },
      }
    ).then((data) => data.json());
  }
  useEffect(() => {
    listRoles().then((data) => {
      setcontentType(data);
    });
  });
  async function createUser(data) {
    const token = JSON.parse(localStorage.getItem("user")).token;
    return fetch(
      "https://icraf-interview-wmugc.ondigitalocean.app/create-permission",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
        body: JSON.stringify(data),
      }
    ).then((data) => data.json());
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

    createUser(state)
      .then((data) => {
        if (data.detail) {
          setstate({ ...state, error: data.detail });
        } else {
          setstate({ ...state, error: false });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setstate({
      name: "",
      content_type: "",
      permission: "",
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 mx-auto">
          <form noValidate onSubmit={onSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">
              create permission
            </h1>
            <div className="form-group">
              <label htmlFor="role">permission</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="permission Name"
                value={state.name}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="codename">codename</label>
              <input
                type="text"
                className="form-control"
                name="codename"
                placeholder="codenaname"
                value={state.codename}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">content type</label>
              <select
                name="content_type"
                className="form-select"
                onChange={onChange}
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                {contentType &&
                  contentType.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.app_label}
                      </option>
                    );
                  })}
              </select>

              <div id="error" className="form-text login-error text-danger">
                {state.error}
              </div>
            </div>

            <div className="login-btn">
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block  "
              >
                Add role
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
