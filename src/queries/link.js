import gql from 'graphql-tag';

const GET_LINK_BY_ID = gql`
    query link {
        Link(id: "SomeID") {
            url
            description
        }
    }
`;

export default { GET_LINK_BY_ID };