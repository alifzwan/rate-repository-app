import { gql } from '@apollo/client';

export const MUTATION_SIGN_IN = gql`
    mutation signIn($username: String!, $password: String!) {
        authorize(credentials: { username: $username, password: $password }) {
        accessToken
        }
    }
`
