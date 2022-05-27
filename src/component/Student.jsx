
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'
import './Style.css'
import AddStudent from './AddStudent'


const Student = () => {
    const [student]=useContext(store)
  return (
    <div>

<div className='kk'><Link to="/update"><h1>Add Student</h1></Link></div>

<table className="table table-bordered border-primary" >
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>

    </tr>
  </thead>

  <tbody>
      {student.map((student)=>(<tr key={student.id}>

<td>{student.Name}</td>
<td>{student.Age}</td>
<td>{student.Course}</td>
<td>{student.Batch}</td>
<td><Link to="/Update">Edit</Link></td>

</tr>


      ))}
  
  
  </tbody>
</table>







    </div>
  )
}

export default Student