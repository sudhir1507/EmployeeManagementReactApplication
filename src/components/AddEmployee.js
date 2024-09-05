import React,{useState} from "react";
import EmployeeServices from "../Services/EmployeeServices";

function AddEmployee() {
    let [reg,setReg]=useState({
                    name:"",
                    email:"",
                    contact:"",
                    nameerr:"",
                    emailerr:"",
                    contacterr:"",
                    msg:""
    });
    let universalHandler=(e)=>{
            setReg(prevState=>{
                return{...prevState,[e.target.name]:e.target.value}
            });
    }
    let vallidateName=(e)=>{
       let str=reg.name;
        var pattern=/^[a-zA-Z]+$/g;
        var result=str.match(pattern);
        if(result!=null){
            setReg((prevState)=>({...prevState,nameerr:""}));
        }else{
            setReg((prevState)=>({...prevState,nameerr:"Invalid Name"}));
        }
    }

    let vallidateEmail=()=>{
        let str=reg.email;
        let pattern=/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,3}$/g;
        let result=str.match(pattern);
        if(result!=null){
            setReg((prevState)=>({...prevState,emailerr:""}))
        }else{
            setReg((prevState)=>({...prevState,emailerr:"invalid email"}))
        }
    }

    let vallidateContact=()=>{
        let str=reg.contact;
        let pattern=/(^[0-9]{10})+$/g;
        let result=str.match(pattern);
        if(result!=null){
            setReg((prevState)=>({...prevState,contacterr:""}));
        }else{
            setReg((prevState)=>({...prevState,contacterr:"Invalid Contact"}));
        }
    }

  let saveEmployee=(e)=>{
      e.preventDefault();

      let employee={
        name:reg.name,
        email:reg.email,
        contact:reg.contact
      }

      let promiseObject=EmployeeServices.createEmployee(employee);
      promiseObject.then((res)=>{
        setReg((prevState)=>({...prevState,msg:res.data}));
      }).catch((res)=>{
        setReg((prevState)=>({...prevState,msg:res.data}));
      });
  }
  return (
    <> 
     <div className="container mt-5 p-5 w-50 border border-black rounded-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          name='name' value={reg.name}  placeholder="Ram" onChange={universalHandler} onKeyUp={vallidateName}
        />
        <span>{reg.nameerr}</span>
        <label for="floatingInput">Enter Name</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          name='email'
          value={reg.email}
          placeholder="ram@gmail.com" onChange={universalHandler} onKeyUp={vallidateEmail}
        />
        <span>{reg.emailerr}</span>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingContact"
          placeholder="Contact"
          name="contact"
          value={reg.contact}
          onChange={universalHandler} onKeyUp={vallidateContact}
        />
        <span>{reg.contacterr}</span>
        <label for="floatingContact">Contact</label>
      </div>
      <div class="form-floating mx-5">
      <button type="button" name="s" value="" class="btn btn-success justify-content-center mt-3 mx-5 w-75 fs-5" onClick={saveEmployee} >Add New Employee</button>
      </div>
      <h4 style={{marginLeft:"120px",color:"green"}}>{reg.msg}</h4>
      </div>
    </>
  );
}
export default AddEmployee;
