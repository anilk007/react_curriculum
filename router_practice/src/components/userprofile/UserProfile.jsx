import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return <p>No user data available</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;
