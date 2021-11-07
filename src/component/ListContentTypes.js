import React, { useState, useEffect } from "react";
import { contentType,isAuthenticated } from "../apis/apis";

export const ListContentTypes = () => {
  const [state, setstate] = useState([]);

  const token = isAuthenticated().token;

  useEffect(() => {
    loadData();
  },);

  const loadData = async () => {
    const response = await contentType(token);
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
              <th scope="col">App label</th>
              <th scope="col">Model</th>
            </tr>
          </thead>
          <tbody>
            {state&&state.map((student, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{student.id}</th>
                  <td>{student.app_label}</td>
                  <td>{student.model}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
