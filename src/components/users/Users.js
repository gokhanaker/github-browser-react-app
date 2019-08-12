import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Users extends Component {

    render() {

        const { users } = this.props;

        return (
            <div className='container'>
                <div className='row'>
                    {users.map(user => (
                        <div key={user.id} className='col-md-4 users-profiles'>
                            <div className='d-flex flex-row'>
                                <img
                                    src={user.avatar_url}
                                    alt='Github Avatar'
                                    className='img-thumbnail users-github-img'
                                    style={{ width: '160px', height: '120px' }}
                                />
                                <div className='d-flex flex-column'>
                                    <h5 className='users-login-name'> {user.login} </h5>
                                    <Link to={`/user/${user.login}`} className='btn btn-secondary users-info '>
                                        Profile Info
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
            </div>
        )
    }
}

// declaring prop types that Users component needs
Users.propTypes = {
    users: PropTypes.array.isRequired
};

// setting default props if no props is passed
Users.defaultProps = {
    users: []
};

export default Users;
