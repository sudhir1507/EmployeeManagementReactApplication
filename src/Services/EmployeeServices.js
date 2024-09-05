import axios from "axios";

const ADD_EMP_API="http://localhost:8080/save";
const VIEW_EMP_API="http://localhost:8080/viewemp";

class EmployeeServices {

    createEmployee(employee){
       
        return axios.post(ADD_EMP_API,employee);
        
    }

    getAllEmployee(){
        return axios.get(VIEW_EMP_API).then((Response)=>Response.data);    
    }
    DeleteEmployeeById(empid){
        
        return axios.get("http://localhost:8080/delemp/"+empid);
    }
    // UpdateEmployeeById(employee){
    //     console.log(employee);
    //     return axios.post("http://localhost:8080/updateemp",employee);
    // }
}
export default new EmployeeServices;