import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Repositories from '../repositories/Repositories';
import PropTypes from 'prop-types';

class UserDetail extends Component {

    componentDidMount() {
        // reading from URL and passing it to App component
        this.props.getGithubUser(this.props.match.params.login);
        this.props.getGithubUserRepositories(this.props.match.params.login);
    }

    render() {

        // console.log('user detail', this.props.githubUser);
        const {
            avatar_url,
            bio,
            blog,
            company,
            email,
            followers,
            following,
            location,
            name,
        } = this.props.githubUser;

        const { githubRepositories } = this.props;
        // console.log('github repositories from user detail', githubRepositories);

        return (
            <div className='container'>
                <div className='d-flex justify-content-around user-detail-section'>
                    <div className=''>
                        <Link to='/' className='btn btn-secondary'>
                            Back To Search
                        </Link>
                    </div>
                    <div>
                        <button type="button" className="btn btn-dark">Github Followers: {followers}</button>
                    </div>
                    <div >
                        <button type="button" className="btn btn-dark">Github Followings: {following}</button>

                    </div>
                    <div className='hidden'>
                        <i className="fab fa-github-alt"></i>
                    </div>
                </div>
                <hr />

                <div className='row'>
                    <div className='col-md-4'>
                        <div className='text-center'>
                            <img src={avatar_url}
                                alt='avatar_image'
                                className='rounded-circle user-detail-img'
                                style={{ width: '240px' }}
                            />
                            <div className='user-detail-section d-flex flex-column'>
                                {name &&
                                    <div className=''>
                                        {name}
                                    </div>
                                }

                                {bio &&
                                    <div className=''>
                                        <hr />
                                        {bio}
                                        <hr />
                                    </div>
                                }

                                {location &&
                                    <div className='user-detail-text'>
                                        <i className="fas fa-map-marker-alt user-detail-icon"></i>
                                        {location}
                                    </div>
                                }

                                {company &&
                                    <div className='user-detail-text'>
                                        <i className="fas fa-briefcase user-detail-icon"></i>
                                        {company}
                                    </div>
                                }

                                {email &&
                                    <div className='user-detail-text'>
                                        <i className="fas fa-envelope user-detail-icon"></i>
                                        {email}
                                    </div>
                                }

                                {blog &&
                                    <div className='user-detail-text'>
                                        <a href={blog}>
                                            {blog}
                                        </a>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='text-center'>
                            <div> <strong>Github Repositories </strong></div>
                            <Repositories githubRepositories={githubRepositories} />
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

// declaring prop types that are gonna pass to UserDetail component
UserDetail.propTypes = {
    getGithubUser: PropTypes.func.isRequired,
    githubUser: PropTypes.object.isRequired,
    getGithubUserRepositories: PropTypes.func.isRequired,
    githubRepositories: PropTypes.array.isRequired
}

export default UserDetail;
