import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './layout/Navigation';
import Users from './users/Users';
import UserDetail from './users/UserDetail';
import { CLIENT_ID } from '../constants';
import { CLIENT_SECRET } from '../constants';


class App extends Component {

  constructor() {
    super();
    // initializing component state
    this.state = {
      users: [],
      githubUser: {},
      githubRepositories: []
    }
  }

  getGithubUserRepositories = async (login) => {

    // console.log('login name at App', login)
    const response = await fetch(`https://api.github.com/users/${login}/repos?per_page=3&sort=createad:ascending
                                &client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);

    if (response.ok) {
      const jsonResponse = await response.json();

      this.setState({ githubRepositories: jsonResponse });
    } else {
      console.log("Error!!!");
    }
  }

  getGithubUser = async (login) => {

    // console.log('login name at App', login)
    const response = await fetch(`https://api.github.com/users/${login}
                                ?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);

    if (response.ok) {
      const jsonResponse = await response.json();

      this.setState({ githubUser: jsonResponse });
    } else {
      console.log("Error!!!");
    }
  }

  searchGithubUsers = async (searchedName) => {

    // console.log('searched name at App', searchedName);
    const response = await fetch(`https://api.github.com/search/users?q=${searchedName}
                                 &client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);

    if (response.ok) {
      // converting resolved 'response' object to json
      const jsonResponse = await response.json();
      // setting 'users' state 
      this.setState({ users: jsonResponse.items });
    } else {
      console.log("Error!!!");
    }
  }

  render() {

    const { users, githubUser, githubRepositories } = this.state;

    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navigation searchUsers={this.searchGithubUsers} />
            <Users users={users} />
          </Route>
          <Route exact path='/user/:login'
            render={props => (
              <div>
                <UserDetail {...props}
                  getGithubUser={this.getGithubUser}
                  githubUser={githubUser}
                  getGithubUserRepositories={this.getGithubUserRepositories}
                  githubRepositories={githubRepositories}
                />
              </div>
            )} />
        </Switch>
      </Router >
    );
  }
}

export default App;
