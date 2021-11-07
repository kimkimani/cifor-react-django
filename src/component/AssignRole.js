import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../apis/apis";
export const AssignRole = () => {
  const [state, setstate] = useState([]);

  const token = isAuthenticated().token;

  async function listPermission() {
    return fetch(
      "https://icraf-interview-wmugc.ondigitalocean.app/list-all-permissions",
      {
        method: "GET",
        headers: { Authorization: `token ${token}` },
      }
    ).then((data) => data.json());
  }
  useEffect(() => {
    listPermission().then((data) => {
      setstate(data);
    });
  });

  return (
    <div className="main">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>

              <th scope="col">Permissions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Test USer</td>

              <td></td>
              <td>
                <div className="actions">
                  {/* <Link to="/view" className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </Link> */}
                  {/* <Link to="/edit" className="btn btn-primary">
                  <i class="fas fa-save"></i>
                </Link> */}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
