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
            type="text"
            className="form-control"
            id="role"
            placeholder="Role"
            aria-describedby="add role"
          />
      
        </div>
        
      
      <div className='btn' > 
      <button type="submit"  className="btn btn-primary">
          Add role
        </button>
      </div>
        
      </form>
    </div>
  );
};
