import React,{useState,useEffect} from 'react'

export const ListStudents = () => {
  const [state, setstate] = useState([]);

  const token =JSON.parse(localStorage.getItem('user')).token
  console.log(token)
  async function listStudents() {
    return fetch("https://icraf-interview-wmugc.ondigitalocean.app/list-students", {
      method: "GET",
      headers: {"Authorization" : `token ${token}`}
     
    }).then((data) => data.json());
  }
  useEffect(() => {
    listStudents().then((data) => {
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
      <th scope="col">First</th>
    
    </tr>
  </thead>
  <tbody>
  {state.map((student,index)=>{
    return(<tr key={index}>
      <th scope="row">{student.id}</th>
      <td>{student.student_name}</td>
     
    </tr>)
  })}
    
   
  </tbody>
</table>
        </div>
        </div>
    )
}
