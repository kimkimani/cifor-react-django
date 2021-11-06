import React,{useState,useEffect} from 'react'

export const ListContentTypes = () => {
  const [state, setstate] = useState([]);

  const token =JSON.parse(localStorage.getItem('user')).token
  console.log(token)
  async function listRoles() {
    return fetch("https://icraf-interview-wmugc.ondigitalocean.app/list-content-types", {
      method: "GET",
      headers: {"Authorization" : `token ${token}`}
     
    }).then((data) => data.json());
  }
  useEffect(() => {
    listRoles().then((data) => {
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
      <th scope="col">App label</th>
      <th scope="col">Model</th>
    
    </tr>
  </thead>
  <tbody>
  {state.map((student,index)=>{
    return(<tr key={index}>
      <th scope="row">{student.id}</th>
      <td>{student.app_label}</td>
      <td>{student.model}</td>
      
     
    </tr>)
  })}
    
   
  </tbody>
</table>
        </div>
        </div>
    )
}
