import React from "react";
import "./style.css";

function ListItem(props){
    const regex = new RegExp("^" + props.search , "i");
   
  if(props.search!==""){  
   if( regex.test(props.item.props.name)){
    return (
    <li>{props.item}</li>
    );
   }
   else{
       return ("");
   } 
  }
  else{
    return (
        <li>{props.item}</li>
    );
  } 
}

export default ListItem;