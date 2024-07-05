import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query {
    users {
      id
      username
      surname
      age
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      username
      surname
      age
    }
  }
`;
