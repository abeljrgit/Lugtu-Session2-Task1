import './App.css';
import React, { Component } from 'react';
import { Images } from './assets';
import { GroceryList } from './GroceryList';

export default class App extends Component {
  state = {
    employeeData: [
      {
        name: 'Abel M. Lugtu Jr',
        age: 26,
        DOB: '09-06-1996',
        salary: 10000,
        designation: 'MS Tech Solution Trainee',
        image: Images.catImage,
      },
      {
        name: 'Abel M. Lugtu Jr',
        age: 30,
        DOB: '09-06-1997',
        salary: 100000,
        designation: 'MS Tech Solution Trainee 2',
        image: Images.catImage,
      },
    ],
    groceryData: [
      {
        id: 1,
        groceryLabel: 'vegetables',
        description: 'vegetables description',
      },
      { id: 2, groceryLabel: 'fruits', description: 'fruits description' },
      { id: 3, groceryLabel: 'drinks', description: 'drinks description' },
    ],
  };

  handleMouseEnter = (name, age, dob, salary, designation) => {
    alert(`${name}\n${age}\n${dob}\n${salary}\n${designation}\n`);
  };

  render() {
    return (
      <div className="App">
        {this.state.employeeData.map((employee) => {
          return (
            <div>
              <img
                alt="Person"
                className="profile-image"
                src={employee.image}
              />
              <h1
                className="name"
                onMouseEnter={() => {
                  this.handleMouseEnter(
                    employee.name,
                    employee.age,
                    employee.dob,
                    employee.salary,
                    employee.designation
                  );
                }}
              >
                {employee.name}
              </h1>
              <p>{employee.designation}</p>
            </div>
          );
        })}
        <GroceryList groceryData={this.state.groceryData} />
      </div>
    );
  }
}

// function App() {

//   return (
//     <div className="App">
//       adwdw
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
