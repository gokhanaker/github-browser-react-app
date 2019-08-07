import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchedName: ''
        };
    }

    updateSearchedName = (event) => {
        console.log('event.target.value', event.target.value);
        this.setState({ searchedName: event.target.value });
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.searchGithubUsers();
        }
    }

    passSearchedName = () => {
        const { searchedName } = this.state;

        if (this.state.searchedName === '') {
            console.log('please type something in the search bar');
        } else {
            this.props.searchUsers(searchedName);
        }
    }

    render() {
        // ES6 destructuring 
        const { title, icon } = this.props;

        return (
            <div className='container navigation-bar'>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <h1>
                        <i className={icon} />
                    </h1>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">{title}</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li>
                    </ul>
                    <form className="form-inline" action="">
                        <input className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search Users"
                            value={this.state.searchedName}
                            onChange={this.updateSearchedName}
                            onKeyPress={this.handleKeyPress} />

                        <button className="btn btn-success"
                            type="submit"
                            onClick={this.passSearchedName}>
                            Search
                        </button>
                    </form>
                </nav>
            </div>
        )
    }
}

// declaring prop types that Navigation component needs
Navigation.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

// setting default props if no props is passed
Navigation.defaultProps = {
    icon: 'fab fa-github-alt',
    title: 'Github Browser'
}

export default Navigation;
