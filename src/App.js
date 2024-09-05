import "./App.css";
import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import SearchEmployee from "./components/SearchEmployee.js"
import AddEmployee from "./components/AddEmployee.js";
import ViewEmployee from "./components/ViewEmployee.js";
import DeleteEmployee from "./components/DeleteEmployee.js";
import UpdateEmployee from "./components/UpdateEmployee.js";
let App = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg px-5 bg-black">
            <div class="container-fluid px-5">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-2 px-5" >
                <li class="nav-item p-2 px-5">
                  <NavLink to="/" className="link">
                    Add New Employee
                  </NavLink>
                </li>
                <li class="nav-item p-2 px-5">
                  <NavLink to="/viewEmp" className="link">
                    View All Employee
                  </NavLink>
                </li>
                <li class="nav-item p-2 px-5">
                  <NavLink to="/searchEmp" className="link">
                    Search Employee
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<AddEmployee/>}></Route>
            <Route path="/viewEmp" element={<ViewEmployee/>}></Route>
            <Route path="/searchEmp" element={<SearchEmployee/>}></Route>
            <Route path="/delemp/:empid" element={<DeleteEmployee/>}></Route>
            <Route path="/updateemp/:empid/:empname/:empemail/:empcontact" element={<UpdateEmployee/>}></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};
export default App;
