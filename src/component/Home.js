import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
export const Home = () => {
  const initialState = { data: [] };
  const [state, setstate] = useState(initialState);
  return (
    <div className='main'>

<div className='addUser'>
<Link to="/addUser" className="btn btn-primary"  data-toggle="modal" data-target="#staticBackdrop">
                  <i class="fas fa-plus"><span> add user</span></i>
                  
                </Link>

</div>

<div className="table-container">
     <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">email</th>
            <th scope="col">role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto@something.com</td>
            <td>    <select id="inputState" className="form-control role">
        <option selected>Role...</option>
        <option>student</option>
        <option>teacher</option>
      </select></td>
            <td>
              <div className="actions">
          
                {/* <Link to="/view" className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </Link> */}
                <Link to="/edit" className="btn btn-primary">
                  <i class="fas fa-edit"></i>
                </Link>
                <Link to="/delete" className="btn btn-danger">
                  <i class="fas fa-trash"></i>
                </Link>
           
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    </div>

   
  );
};
