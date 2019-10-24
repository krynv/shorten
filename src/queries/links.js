import gql from 'graphql-tag';

const GET_ALL_LINKS = gql`
    query links {
        links {
            id
            url
            description
            hash
        }
    }
`;

export default { GET_ALL_LINKS };