
# EMPLOYEE DIRECTORY(REACT)

## About: ##

* For this assignment, an employee directory is created with React. The application's UI is broken down into components, component state is managed, and the application responds to user events. A file filled with 100 random employee information is used as a mock database. When the user loads the page, a list of employees is shown with their picture, name and role in the company. When user clickes an employee, a detailed card pops up next to the list displaying more detailed information about the employee such as phone, email, website and department. The employees can be filtered by the user according to name using the search bar. The user also can sort the employees by their department, their roles in the company and also by their name.

## Installation: ##

  * The application is deployed using Heroku: 

  * Running aplication can be reached at https://stormy-chamber-22919.herokuapp.com/

  # Setup for Local Machine

1. Run application using npm start
   

## Usage: ##

  ![Employee List Demo](public/employee.gif)
    
## How: ##
Class Components:

 - App: Encapsulates `HomePage` and `EmployeePage` components. Keeps track of states such as employees and which employees are clicked for detailed display.

 - HomePage: Encapsulates `Header`, `SearchBar`, `Sort` and `List` components. Keeps track of states such as `CardHeader` component list, search and sort criteria. Provides methods `handleInputChange` for search bar and `sortList` for sorting functionality.

 Functional Components:

 - EmployeePage: Encapsulates `Header` and `EmployeeCard` components. Component for displaying detailed employee information.

 - CardHeader: Component for displaying picture, name and job title of an employee. Click event on this component triggers the detailed emloyee information to be shown.

 - EmployeeCard: Encapsulates `CardHeader` component. Vital component in displaying the detailed employee information such as phone number, email, website and department. 

 - Header: Displays a title.

 - List: Encapsulates `List Items`. This component provides list of ListItems.

 - ListItem: It has the `CardHeader` component. According to searh criteria passed as a prop from the parent component, `CaedHeader` component is shown or not

 - SearchBar: This is the search bar component that triggers the `handleInputChange` method passed from the parent.

 - Sort: The Drop-Down menu component that triggers sorting function passed from the parent component.

 - Wrapper: Wrapper component that wraps children components.

 - employee.json: Mock database that holds information about 100 random employees.



## Credits: ## 

I'm greatful for our instructor Omar Patel and TA's Tyler Bray, Matthew Calimbas for their help on the issues encountered in the process of developing this application.

The web sites that I found useful while implementing the application are listed below:

  * https://dev.to/kelli/demo-your-app-in-your-github-readme-with-an-animated-gif-2o3c
  * https://fakedata.dev/
  * https://getbootstrap.com/docs/4.4/utilities/flex/
  * https://reactjs.org/docs/
  * https://mockaroo.com/
  
  
## Licence: ##

Anybody is welcomed to copy code snippets and test it out.
