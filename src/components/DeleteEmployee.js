import React,{useEffect, useState} from "react";
import EmployeeServices from "../Services/EmployeeServices";
import {useParams} from "react-router-dom";

function DeleteEmployee(){
    let {empid}=useParams();
    let [msg,setMsg]=useState("");
    useEffect(()=>{
        let proObject=EmployeeServices.DeleteEmployeeById(empid);
        proObject.then((res)=>{
            setMsg("employee deleted success..");
        });
    });
     return<>
        <h2>{msg}</h2>
     </>
}
export default DeleteEmployee;