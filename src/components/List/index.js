import React from "react";
import "./style.css";
import ListItem from "../ListItem";

function List(props){
    return (
        <ul>
{props.list.map(component=><ListItem item={component} search={props.search} key={component.props.id}/>)}
        </ul>

    );
}

export default List;