import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {
    render() {

        const clickCounter = (this.props.link.stats && this.props.link.stats.clicks) || 0;

        return (
            <div>
                <div>
                    {this.props.link.description} (<a href={this.props.link.hash}>{this.props.link.hash}</a>) - clicks: {clickCounter}
                </div>
            </div>
        );
    }
}

Link.propTypes = {
    link: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        hash: PropTypes.string,
        description: PropTypes.string
    })
};

export default Link;