import React from 'react';

import { useMutation } from '@apollo/client';

import { CREATE_USER } from 'graphql/mutations';
import { GET_USERS } from 'graphql/queries';

export const UserCreateForm = () => {
  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const onCreateUserButtonClick = () => {
    createUser({
      variables: {
        username: 'username',
        surname: 'surname',
        age: 30,
      },
    });
  };
  return <button onClick={onCreateUserButtonClick}>Add new user</button>;
};
