import React from 'react';
// import lodash from "lodash"; _get in lodash
import getUser from "./utils/api.js"
import './App.css';
import DataTable from "./components/DataTable/DataTable.js";
import Search from "./components/search/search.js";
import PageHeader from "./components/header/header.js";

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
        this.setState({ employees: res.data.results });
      });
  };

  handleInputChange = event => {
    this.setState({
      searchTerm: event.target.value
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
      <div className="container">
        <PageHeader
        />
        <Search
          searchTerm={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
        />
        <DataTable
          employees={this.state.employees}
          sortHandler={this.sortHandler}
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }
};

export default App;
