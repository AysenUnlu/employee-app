import React from "react";
import "./style.css";

function Sort(props){
    return (
        <div className="btn-group dropright">
                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Sort By
                </button>
                <div className="dropdown-menu">
                   <button className="dropdown-item" type="button" onClick={()=>{props.sortlist("Department")}}>Department</button>
                   <button className="dropdown-item" type="button" onClick={()=>{props.sortlist("Job Title")}}>Job Title</button>
                   <button className="dropdown-item" type="button" onClick={()=>{props.sortlist("Full Name")}}>Full Name</button>
              </div>
        </div>
        
    );
}

export default Sort;