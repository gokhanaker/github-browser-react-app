import React, { Component } from 'react';
import '../../index.css';

class Users extends Component {

    render() {

        const { users } = this.props;

        return (
            <div className='container'>
                <div className='row'>
                    {users.map(user => (
                        <div key={user.id} className='col-md-4'>
                            <div className='d-flex flex-row'>
                                <img
                                    src={user.avatar_url}
                                    alt='Github Avatar'
                                    className='img-thumbnail github-avatar-img'
                                    style={{ width: '160px', height: '120px' }}
                                />
                                <a href={user.html_url} className='btn btn-info user-info' role='button'> Profile Info </a>
                            </div>
                            <div>
                                <h4 className='text-center login-name'> {user.login} </h4>
                            </div>
                        </div>
                    ))}
                </div>
                <hr />
            </div>
        )
    }
}

// <User key={user.id} user={user} />
export default Users;
