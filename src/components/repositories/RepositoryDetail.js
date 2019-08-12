import React from 'react';
import PropTypes from 'prop-types';


// stateless functional component
const RepositoryDetail = (props) => {

    const { name, description, language, html_url } = props.repositoryDetail;

    return (
        <div className='repository-detail'>
            {html_url && name &&
                <div className='repository-detail-text'>
                    <a href={html_url}> {name}</a>
                </div>
            }
            {description &&
                <div className='repository-detail-text'>
                    {description}
                </div>
            }
            {language &&
                <div className='repository-detail-text'>
                    developed with: <strong> {language}</strong>
                </div>
            }
            <hr />
        </div>
    )
}

RepositoryDetail.propTypes = {
    repositoryDetail: PropTypes.object.isRequired
};

RepositoryDetail.defaultProps = {
    repositoryDetail: {}
};

export default RepositoryDetail;
