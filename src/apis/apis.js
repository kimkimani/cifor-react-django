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
    return fetch(
        "https://icraf-interview-wmugc.ondigitalocean.app/list-roles",
        {
          method: "GET",
          headers: { Authorization: `token ${token}` },
        }
      )
  };