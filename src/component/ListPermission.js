import React,{useState,useEffect} from 'react'

export const ListPermission = () => {
  const [state, setstate] = useState([]);

  const token =JSON.parse(localStorage.getItem('user')).token
  console.log(token)
  async function listPermission() {
    return fetch("https://icraf-interview-wmugc.ondigitalocean.app/list-all-permissions", {
      method: "GET",
      headers: {"Authorization" : `token ${token}`}
     
    }).then((data) => data.json());
  }
  useEffect(() => {
    listPermission().then((data) => {
      console.log(data);
     
      setstate(data);
    });
  }, []);
    return (
        <div className='main'>

<div className='list-students'>
         <table className="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">Name</th>
    
    </tr>
  </thead>
  <tbody>
  {state.map((student,index)=>{
    return(<tr key={index}>
      <th scope="row">{student.id}</th>
      <td>{student.name}</td>
     
    </tr>)
  })}
    
   
  </tbody>
</table>
        </div>
        </div>
    )
}
