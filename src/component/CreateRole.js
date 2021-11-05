import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
export const CreateRole = () => {
  return (
    <div className="container">

      <form id="staticBackdrop">
      <div className='form-header' > 
      <h3>Create Role</h3>
      </div>
        
        <div className="form-group">
         
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
            aria-describedby="emailHelp"
          />
      
        </div>
        <div className="form-group">
        
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
      
      <div className='btn' > 
      <button type="submit"  className="btn btn-primary">
          Add User
        </button>
      </div>
        
      </form>
    </div>
  );
};
