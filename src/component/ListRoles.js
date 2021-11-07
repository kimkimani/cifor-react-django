import React, { useState, useEffect } from "react";
import { listRoles, listPermission, isAuthenticated } from "../apis/apis";

export const ListRoles = () => {
  const [state, setstate] = useState([]);
  const [permission, setPermissions] = useState([]);
  const token = isAuthenticated().token;

  useEffect(() => {
    loadData();
  });

  const loadData = async () => {
    const response = await listRoles(token);
    const data = await response.json();
     const responsePermission = await listPermission(token);
    const dataPermission = await responsePermission.json();
    setstate(data);
    setPermissions(dataPermission);
  };

  return (
    <div className="main">
      <div className="list-students">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Permissions</th>
            </tr>
          </thead>
          <tbody>
            {state&&state.map((student, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>
                    {
                      // if student.permissions is empty
                      student.permissions.length === 0 ? (
                        <p>No permissions</p>
                      ) : (
                        permission
                          .filter(
                            (permission) =>
                              permission.id === student.permissions[0]
                          )
                          .map((permission) => (
                            <p key={permission.id} className="text-warning">
                              {permission.name}
                            </p>
                          ))
                      )
                    }
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
