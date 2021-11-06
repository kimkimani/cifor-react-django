import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../css/style.css";

export const CreateRole = () => {
  const [state, setstate] = useState([]);
  async function createUser(data) {
    const token =JSON.parse(localStorage.getItem('user')).token
    return fetch("https://icraf-interview-wmugc.ondigitalocean.app/create-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `token ${token}`
      },
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }


 
   const onChange = (event) => {
    setstate({ ...state, 
      error: false,
      [event.target.name]: event.target.value });

  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(state)
        createUser(state)
      .then((data) => {
        console.log(data);
      if(data.detail){
        console.log(data.detail);
        setstate({...state, error: data.detail})
        
      }
      else{
        setstate({...state, error: false})
      
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
             create role
            </h1>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Role Name"
                value={state.name}
                onChange={onChange}
              />
              <div id="error" className="form-text login-error text-danger">{state.error}</div>
            </div>
            
        
            <div className='login-btn' >
            <button type="submit" className="btn btn-lg btn-primary btn-block  ">
             Add role
            </button>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );

  
};
