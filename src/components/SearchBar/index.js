import React from "react";
import "./style.css";



function  SearchBar(props){

   
    return (
        <span>
         <input type="text" name="Search" placeholder="Search.." value={props.search}  onChange={props.handleInputChange}/>
        </span>
        
    );
}  
export default SearchBar;