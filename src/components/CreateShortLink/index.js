import React from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const CREATE_SHORT_LINK = gql`
    mutation CreateLinkMutation($url: String!, $description: String!, $createdById: ID!) {
        createLink(url: $url, description: $description, createdById: $createdById) {
            id
        }
    }
`;

class CreateShortLink extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            url: ''
        };
    }

    createShortLink = async () => {
        // we create a short link here
    };

    render() {
        return (
            <div>
                <input
                    id="url"
                    type="text"
                    value={this.state.url}
                    placeholder="Enter URL"
                    onChange={e => this.setState({ url: e.target.value })}
                />

                <input
                    id="description"
                    type="text"
                    value={this.state.description}
                    placeholder="Description"
                    onChange={e => this.setState({ description: e.target.value })}
                />

                <button onClick={() => this.createShortLink()}>Create URL</button>
            </div>
        );
    }
}

export default graphql(CREATE_SHORT_LINK, { name: 'createShortLinkMutation' })(CreateShortLink);