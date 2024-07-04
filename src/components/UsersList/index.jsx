import React from 'react';

import { useQuery } from '@apollo/client';

import { UserListItem } from 'components/UserListItem';
import { GET_USERS } from 'graphql/queries';

export const UsersList = () => {
  const { data, loading, error } = useQuery(GET_USERS);
  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {data.users.map(({ id, username, surname, age }) => (
        <UserListItem
          key={id}
          id={id}
          username={username}
          surname={surname}
          age={age}
        />
      ))}
    </ul>
  );
};
