import React from "react";
import "./style.css";
import EmployeeCard from "../EmployeeCard";
import Header from "../Header";


function EmployeePage(props){
   return (
      <div className="card">
         <Header title="Employee"/>
         <EmployeeCard employee={props.employee}/>
      </div>   
   );     
}

export default EmployeePage;