import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css'
export const Login = () => {
  return (
    <div className="container">

      <form>
      <div className='form-header' > 
      <h3>Login</h3>
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
      
      <div className='login-btn' > 
      <button type="submit"  className=" btn  btn-primary">
          Submit
        </button>
      </div>
        
      </form>
    </div>
  );
};
