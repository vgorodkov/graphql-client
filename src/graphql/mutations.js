import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation ($username: String!, $surname: String!, $age: Int!) {
    createUser(data: { username: $username, surname: $surname, age: $age }) {
      id
      surname
      username
    }
  }
`;

export const DELETE_USER = gql`
  mutation ($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const EDIT_USER = gql`
  mutation ($id: ID!) {
    editUser(
      data: { id: $id, username: "edited2", surname: "edited3", age: 100 }
    ) {
      id
    }
  }
`;
