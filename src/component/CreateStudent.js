import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../css/style.css";

export const CreateStudent = () => {
  const [state, setstate] = useState([]);
  const token = JSON.parse(localStorage.getItem("user")).token;
  async function createUser(data) {
    return fetch("https://icraf-interview-wmugc.ondigitalocean.app/create-student/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        headers: { Authorization: `token ${token}` },
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
        createUser({'student_name': state.studentName})
      .then((data) => {
        console.log(data);
      if(data.error){
        setstate({...state, error: data.error})
        
      }
      else{
   
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
             create student
            </h1>
            <div className="form-group">
              <label htmlFor="student name">student name</label>
              <input
                type="text"
                className="form-control"
                name="studentName"
                placeholder="Enter student name"
                value={state.studentName}
                onChange={onChange}
              />
            </div>
           
        
            <div className='login-btn' >
            <button type="submit" className="btn btn-lg btn-primary btn-block  ">
             Add Student
            </button>
            </div>
          
          </form>
        </div>
      </div>
    </div>
  );

  
};
