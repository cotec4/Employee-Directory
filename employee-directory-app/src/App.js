import React from 'react';
import moment from "moment";
// import lodash from "lodash"; _get in lodash
import getUser from "./utils/api.js"
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      searchTerm: "",
      sorted: false
    };
  };

  componentDidMount() {
    getUser
      .then((res) => {
        // (console.log(res));
        this.setState({ employees: res.data.results });
      });
  };

  sortHandler(item) {
    let sortedNames;
    if (!this.state.sorted) {
      sortedNames = this.state.employees.sort((a, b) => { return b.name[item].localeCompare(a.name[item]) });
      this.setState({ employees: sortedNames, sorted: true });
    }
    else {
      sortedNames = this.state.employees.sort((a, b) => { return a.name[item].localeCompare(b.name[item]) });
      this.setState({ employees: sortedNames, sorted: false });
    }
  };

  render() {
    return (
      <div className="App">
        {console.log(this.state.searchTerm)}
        <input onChange={event => {
          this.setState({ searchTerm: event.target.value });
        }} />
        <table>
          <thead>
            <tr>
              <th>Headshot</th>
              <th>Title</th>
              <th onClick={() => { this.sortHandler("first") }}>First Name</th>
              <th onClick={() => { this.sortHandler("last") }}>Last Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.filter(employee => employee.name.last.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) || employee.name.first.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())).map((person, id) =>
              <tr key={id}>
                <td><img src={person.picture.thumbnail}></img></td>
                <td>{person.name.title}</td>
                <td>{person.name.first}</td>
                <td>{person.name.last}</td>
                <td>{person.gender}</td>
                <td>{moment(person.dob.date).format("L")}</td>
                <td>{person.email}</td>
                <td>{person.cell}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
};

// function App() {
//   return (
//     <div className="App">
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

export default App;
