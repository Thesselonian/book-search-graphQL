import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($password: String!, $email: String!) {
        login(password: $password, email:$email) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: [Author], $description: String, $title: String, $link: String, $image: String) {
        saveBook(authors: $authors, description: $description, title: $title, link: $link, image: $image) {
            _id
            authors
            description
            title
            link
            image
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($id: ID!, ) {
        deleteBook(_id: $id)
    }
`;
