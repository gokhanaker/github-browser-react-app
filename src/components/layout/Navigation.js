import React, { Component } from 'react';


class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedName: ''
        };
    }

    updateSearchedName = (event) => {
        // console.log('searched name', event.target.value);
        this.setState({ searchedName: event.target.value });
    }

    handleKeyPress = (event) => {
        // if 'enter' key is pressed in search bar
        if (event.key === 'Enter') {
            this.passSearchedName();
        }
    }

    // passing props to parent App component
    passSearchedName = (e) => {
        const { searchedName } = this.state;

        if (searchedName === '') {
            console.log('please type something in the search bar!!!');
        } else {
            this.props.searchUsers(searchedName);
        }
    }

    render() {

        // ES6 destructuring
        const { searchedName } = this.state;

        return (
            <div className='container'>
                <nav className='navbar navbar-expand-sm bg-secondary navbar-dark navigation-bar'>
                    <h1>
                        <i className='fab fa-github-alt' />
                    </h1>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link' >Github Browser</a>
                        </li>
                        <li className='nav-item active'>
                            <a href='/' className='nav-link' >Home</a>
                        </li>
                    </ul>
                    <input id='search-user-textbox'
                        className='form-control mr-sm-2'
                        type='text'
                        placeholder='Search Users'
                        value={searchedName}
                        onChange={this.updateSearchedName}
                        onKeyPress={this.handleKeyPress} />

                    <button className='btn btn-light'
                        onClick={this.passSearchedName}>
                        Search
                    </button>
                </nav>
            </div >
        )
    }
}

export default Navigation;
