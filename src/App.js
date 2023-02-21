import './App.css';
import React, { Component } from 'react';
import { Images } from './assets';
import { GroceryList } from './GroceryList';

export default class App extends Component {
  state = {
    name: 'Abel M. Lugtu Jr',
    age: 26,
    DOB: '09-06-1996',
    salary: 10000,
    designation: 'MS Tech Solution Trainee',
    image: Images.catImage,
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

  handleMouseEnter = () => {
    alert(
      `${this.state.name}\n${this.state.age}\n${this.state.DOB}\n${this.state.salary}\n${this.state.designation}\n`
    );
  };

  render() {
    return (
      <div className="App">
        <img alt="Person" className="profile-image" src={this.state.image} />
        <h1 className="name" onMouseEnter={this.handleMouseEnter}>
          {this.state.name}
        </h1>
        <p>{this.state.designation}</p>
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
