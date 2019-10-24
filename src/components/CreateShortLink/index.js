import React from 'react';

import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';

const CREATE_SHORT_LINK = gql`
    mutation createLinkMutation($url: String!, $description: String!, $hash: String!) {
        createLink(url: $url, description: $description, hash: $hash) {
            id
            hash
        }
    }
`;

const GET_LINK_COUNT = gql`
    query getLinkCount {
        links: _allLinksMeta {
            count
        }
    }
`;

const createHash = itemCount => {
    let hashDigits = [];
    // dividend is a unique integer (in our case, number of links)
    let dividend = itemCount + 1;
    let remainder = 0;

    while (dividend > 0) {
        remainder = dividend % 62;
        dividend = Math.floor(dividend / 62);
        hashDigits.unshift(remainder);

    }
    console.log(hashDigits);

    const alphabetArray = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split('');

    // Convert hashDigits to base62 representation
    let hashString = '';
    let i = 0;


    while (hashDigits.length > i) {
        hashString += alphabetArray[hashDigits[i]];
        i++;
    }

    return hashString;

};

class CreateShortLink extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            url: ''
        };
    }

    createShortLink = async () => {
        const linkCountQuery = await this.props.client.query({
            query: GET_LINK_COUNT,
        });

        const linkCount = linkCountQuery.data.links.count;
        const hash = createHash(linkCount);

        const { url, description } = this.state;

        await this.props.createShortLinkMutation({
            variables: {
                url,
                description,
                hash
            }
        });
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

export default graphql(CREATE_SHORT_LINK, { name: 'createShortLinkMutation' })(withApollo(CreateShortLink));