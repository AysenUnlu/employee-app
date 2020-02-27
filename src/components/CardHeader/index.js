import React from "react";
import "./style.css";

function CardHeader(props){
    return(
       <div className="card-header" id={props.id} onClick={()=>props.showEmployee(props.id)} key={props.id}> 
            
             <img alt={props.name} src={props.image} />
             <p id="name">{props.name}</p>
             <p id="title">{props.jobTitle}</p>
          
       </div> 
    );
}

export default CardHeader;