export const listStudents = (token) => {
  return fetch(
    "https://icraf-interview-wmugc.ondigitalocean.app/list-students",
    {
      method: "GET",
      headers: { Authorization: `token ${token}` },
    }
  );
};

export const contentType = (token) => {
  return fetch(
    "https://icraf-interview-wmugc.ondigitalocean.app/list-content-types",
    {
      method: "GET",
      headers: { Authorization: `token ${token}` },
    }
  );
};

export const listPermission = (token) => {
  return fetch(
    "https://icraf-interview-wmugc.ondigitalocean.app/list-all-permissions",
    {
      method: "GET",
      headers: { Authorization: `token ${token}` },
    }
  );
};

export const listRoles = (token) => {
  return fetch("https://icraf-interview-wmugc.ondigitalocean.app/list-roles", {
    method: "GET",
    headers: { Authorization: `token ${token}` },
  });
};

export const createStudent = (token,data) => {
  return  fetch("https://icraf-interview-wmugc.ondigitalocean.app/create-student/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        headers: { Authorization: `token ${token}` },
      },
      body: JSON.stringify(data),
    })
  };

  export const isAuthenticated = () => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return false;
    }
  };