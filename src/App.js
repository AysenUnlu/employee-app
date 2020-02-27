import React from "react";
//import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import HomePage from "./components/HomePage";
import CardHeader from "./components/CardHeader";
import EmployeePage from "./components/EmployeePage";
//import friends from "./friends.json";
import employees from "./employee.json";
import "./App.css";

class App extends React.Component {
  

 state={
      employees,
      clicked:0,
 };



showEmployee=id=>{
  if(id==-1){
    this.setState({clicked:-1});
    return;
  }
  for(let i=0;i<this.state.employees.length;i++){
         if(this.state.employees[i].id===id){
           this.setState({clicked:i});
           return;
         }
  }
  
}  
 
 render(){
  return (
    <Wrapper>
      <div className="col-sm-5">
         <HomePage itemList={this.state.employees.map((employee)=>
                           <CardHeader name={employee.first_name+" "+employee.last_name} 
                                       image={employee.picture} 
                                       jobTitle={employee["Job Title"]} 
                                       id={employee.id} 
                                       department={employee.department}
                                       showEmployee={this.showEmployee} 
                                       key={employee.id}  
                           />)}     
                           showEmployee={this.showEmployee} 
          />
      </div>
      <div className="col-sm-6" id="display">
          { (this.state.clicked>=0)?
           <EmployeePage employee={this.state.employees[this.state.clicked]}/>   
           :""
          }   
      </div>
    
    </Wrapper>
  );
  }
}

export default App;

/**
 * 
 * <div className="col-sm-6">
        <EmployeePage employee={employees[0]}/>
      </div>
 * removeFriend=id=>{
   const friends=this.state.friends.filter(friend=>friend.id!==id);
   this.setState({friends});

 };
   <h1 className="title">Friends List</h1>
      {this.state.friends.map(friend=><FriendCard name={friend.name} 
                                                  image={friend.image} 
                                                  occupation={friend.occupation} 
                                                  location={friend.location} 
                                                  key={friend.id} 
                                                  removeFriend={this.removeFriend} 
                                                  id={friend.id}/>)}
 */