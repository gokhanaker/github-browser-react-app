import React, { Component } from 'react'
import RepositoryDetail from './RepositoryDetail';
import PropTypes from 'prop-types';


class Repositories extends Component {

    render() {

        const { githubRepositories } = this.props;

        return (
            <div>
                {githubRepositories.map(gitbubRepository =>
                    <RepositoryDetail key={gitbubRepository.id} repositoryDetail={gitbubRepository} />
                )
                }
            </div>
        )
    }
}

Repositories.propTypes = {
    githubRepositories: PropTypes.array.isRequired
};

// setting default props if no props is passed
Repositories.defaultProps = {
    githubRepositories: []
};

export default Repositories;
