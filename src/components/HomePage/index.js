import React from "react";
import "./style.css";
import Header from "../Header";
import SearchBar from "../SearchBar";
import List from "../List";
import Sort from "../Sort";

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            itemList:props.itemList,
            search:"",
            sort:"",
            showEmployee:()=>props.showEmployee(-1)
        }
       
       
        
    }
    handleInputChange=event=>{
        this.state.showEmployee();
        const value=event.target.value;
        this.setState({search:value});
 
    }  
   
     
    
     sortlist=(item)=>{
         switch (item.toLowerCase()){
             case "department":
                   this.setState({itemList:this.state.itemList.sort((a, b) => (a.props.department.toLowerCase() > b.props.department.toLowerCase()) ? 1 : -1)});
                   break;
             case "job title":   
                   this.setState({itemList:this.state.itemList.sort((a, b) => (a.props.jobTitle.toLowerCase() > b.props.jobTitle.toLowerCase()) ? 1 : -1)});
                   break;   
             case "full name":   
                   this.setState({itemList:this.state.itemList.sort((a, b) => (a.props.name.toLowerCase() > b.props.name.toLowerCase()) ? 1 : -1)});
                   break;         
             default: console.log("Not applicable");      
         }
         this.state.showEmployee();
     }
     
   render (){
       return(
   <div>    
     <Header title="Employee Directory"/>
     <SearchBar search={this.state.search} handleInputChange={this.handleInputChange}/>
     <Sort sortlist={this.sortlist} sort={this.state.sort}/> 
     <List list={this.state.itemList} search={this.state.search}/>
   </div> 
       );
    
   }

}

export default HomePage;

/*
showEmployee={props.showEmployee}
*/ 