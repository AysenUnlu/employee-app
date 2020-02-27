import React from "react";
import "./style.css";
import CardHeader from "../CardHeader";

function EmployeeCard(props){
    return (
          <div>
           <CardHeader name={props.employee.first_name+" "+props.employee.last_name} image={props.employee.picture} jobTitle={props.employee["Job Title"]}/>
           <div className="card-body">
             <ul>
               <li><b>Phone: </b>{props.employee.phone}</li>
               <li><b>Email: </b>{props.employee.email}</li>
               <li><b>Website: </b>{props.employee.website}</li>
               <li><b>Department: </b>{props.employee.department}</li>
             </ul>
           </div>  
          </div>  
    );
}

export default EmployeeCard;

/* 
 */