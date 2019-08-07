import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './layout/Navigation';
import Users from './users/Users';

class App extends Component {

  constructor() {
    super();
    // initializing component state
    this.state = {
      users: []
    }
  }

  searchGithubUsers = async (searchedName) => {

    // console.log('from searchGithubUsers', searchedName);
    const response = await fetch(`https://api.github.com/search/users?q=${searchedName}`);

    if (response.ok) {
      // converting resolved 'response' object to json
      const jsonResponse = await response.json();
      // console.log('data', jsonResponse);

      // setting users state 
      this.setState({ users: jsonResponse.items });
    } else {
      console.log("error");
    }
  }

  render() {

    const { users } = this.state;

    return (
      <div>
        <Navigation title='Github Browser'
          icon='fab fa-github-alt'
          searchUsers={this.searchGithubUsers} />
        <Users users={users} />
      </div>
    );
  }
}

export default App;
