import React,{useEffect,useState} from "react";
import EmployeeServices from "../Services/EmployeeServices";
import { Router,Route,Link } from "react-router-dom";
function ViewEmployee() {
  let [employee,setEmployee]=useState([]);

  useEffect(()=>{
    let promiseObject=EmployeeServices.getAllEmployee();
    promiseObject.then((res)=>{setEmployee(res);});
    promiseObject.catch((err)=>{console.log(err);});
  },[]);

  return (
    <> 
      <div className="mt-3">
      <table class="table table-striped table-bordered border-primary">
        <thead className="fs-4 table-primary">
          <tr>
          <th scope="col">Sr. No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Delete</th>
            <th scope="col">Update</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp,index)=>(

            <tr key={emp.id}> 
                <td>{index+1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.contact}</td>
                <td>  <Link to={`/delemp/${emp.id}`} id="dlt">DELETE</Link></td>
                <td><Link to={`/updateemp/${emp.id}/${emp.name}/${emp.email}/${emp.contact}`} id="upd">UPDATE</Link></td>
            </tr>
          ))}
          
        </tbody>
      </table>
      </div>
    </>
  );
}
export default ViewEmployee;
