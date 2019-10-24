import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Link from '../Link';

const GET_ALL_LINKS = gql`
    query links {
        allLinks {
            id
            url
            description
            hash
        }
    }
`;

const LINKS_SUBSCRIPTION = gql`
    subscription NewLinkCreatedSubscription {
        Link(filter: {mutation_in: [CREATED]}) {
            node {
                id
                url
                description
                hash
            }
        }
    }
`;

class LinkList extends React.Component {
    componentDidMount() {
        this.props.allLinksQuery.subscribeToMore({
            document: LINKS_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {

                const newLinks = [
                    ...prev.allLinks,
                    subscriptionData.data.Link.node,
                ];

                const result = {
                    ...prev,
                    allLinks: newLinks,
                };

                return result;
            }
        });
    }

    render() {

        if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
            return <div>Loading...</div>;
        }

        if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
            return <div>Error occured</div>;
        }

        const allLinks = this.props.allLinksQuery.allLinks;

        if (allLinks.length === 0) {
            return <div>There are no links</div>;
        }

        return (
            <div>
                {allLinks.map(link => (
                    <Link key={link.id} link={link} />)
                )}
            </div>
        );
    }
}

export default graphql(GET_ALL_LINKS, { name: 'allLinksQuery' })(LinkList);
