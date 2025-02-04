import React from 'react';
import WithData from './../../HOC/with_data/WithData';

const UserList = ({ data }) => {
  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );s
};

const dataURL = "https://jsonplaceholder.typicode.com/users";

const UserListWithData = WithData(UserList, dataURL); 

export default UserListWithData;
