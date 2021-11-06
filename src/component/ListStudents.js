import React, { useState, useEffect } from "react";
import { listStudents } from "../apis/apis";

export const ListStudents = () => {
  const [state, setstate] = useState([]);

  const token = JSON.parse(localStorage.getItem("user")).token;

  
  useEffect(() => {
   loadData();
  }, 
  []);

  const loadData = async() =>{
    const response = await listStudents(token);
    const data= await response.json()
    setstate(data);
  }
  return (
    <div className="main">
      <div className="list-students">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">First</th>
            </tr>
          </thead>
          <tbody>
            {state.map((student, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{student.id}</th>
                  <td>{student.student_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
