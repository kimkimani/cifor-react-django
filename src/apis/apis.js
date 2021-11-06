
  export const  listStudents = (token) => {
    return fetch("https://icraf-interview-wmugc.ondigitalocean.app/list-students", {
      method: "GET",
      headers: {"Authorization" : `token ${token}`}
         })
  }