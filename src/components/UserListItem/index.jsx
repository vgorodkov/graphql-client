import React from 'react';

import { useMutation } from '@apollo/client';

import { DELETE_USER, EDIT_USER } from 'graphql/mutations';
import { GET_USERS } from 'graphql/queries';

export const UserListItem = ({ id, username, surname, age }) => {
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const [editUser] = useMutation(EDIT_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const onDeleteUserBtnClick = () => {
    deleteUser({ variables: { id } });
  };

  const onEditUserBtnClick = () => {
    editUser({
      variables: {
        id,
        username: 'asdasdasd222',
        surname: '3123123123123123edited',
        age: 100,
      },
    });
  };

  return (
    <div>
      <p>Id: {id}</p>
      <p>Username: {username}</p>
      <p>Surname: {surname}</p>
      <p>Age: {age}</p>
      <button onClick={onDeleteUserBtnClick}>delete user</button>
      <button onClick={onEditUserBtnClick}>edit user</button>
    </div>
  );
};
