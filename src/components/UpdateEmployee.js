import React,{useEffect, useState} from "react";
import EmployeeServices from "../Services/EmployeeServices";
import {useParams} from "react-router-dom";

let UpdateEmployee=()=>{
    let {empid,empname,empemail,empcontact}=useParams();
    console.log(empid);
    let [emp,setEmp]=useState({
         id:empid,
         name:empname,
         email:empemail,
         contact:empcontact
    });
    let [msg,setMsg]=useState("");
    let uniHandler=(e)=>{
        setEmp(prevState=>({...prevState,[e.target.name]:e.target.value}));
    }

    let updateEmployeedata=(e)=>{
       // e.preventDefault(); 
       
        let employee={
            id:emp.id,
            name:emp.name,
            email:emp.email,
            contact:emp.contact
        }
        console.log(employee)
       // let employee=JSON.stringify(employee1);
        let proObject=EmployeeServices.createEmployee(employee);
        
        proObject.then((res)=>{setMsg("Employee Updated..")});
        proObject.catch((res)=>{setMsg("Employee Not Updated Some problem is there")});

    
    }
   return(<>
       <div className="container mt-5 p-5 w-50 border border-black rounded-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
       <div class="form-floating mb-3">
        <input
          type="hidden"
          class="form-control"
          id="floatingInput"
          name='id' value={emp.id} 
        />
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          name='name' value={emp.name}   onChange={uniHandler} 
        />
        
        <label for="floatingInput">Update Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          name='email'
          value={emp.email}
          onChange={uniHandler} 
        />
       
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingContact"
          placeholder="Contact"
          name="contact"
          value={emp.contact}
          onChange={uniHandler} 
        />
        
        <label for="floatingContact">Contact</label>
      </div>
      <div class="form-floating mx-5">
      <button type="button" name="s" value="Update Employee" class="btn btn-success justify-content-center mt-3 mx-5 w-75 fs-5" onClick={updateEmployeedata}  > Update Employee</button>
      </div>
      <h4 style={{marginLeft:"120px",color:"green"}}>{msg}</h4>
      </div>
   </>);
}
export default UpdateEmployee;