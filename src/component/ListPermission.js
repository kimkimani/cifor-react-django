import React, { useState, useEffect } from "react";
import { listPermission,isAuthenticated } from "../apis/apis";

export const ListPermission = () => {
  const [state, setstate] = useState([]);

  const token = isAuthenticated().token;
  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    const response = await listPermission(token);
    const data = await response.json();
    setstate(data);
  };
  return (
    <div className="main">
      <div className="list-students">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {state&&state.map((student, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
