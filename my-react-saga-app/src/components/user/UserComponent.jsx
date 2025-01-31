import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserRequest } from './../../actions/userActions';

const UserComponent = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.user);

  return (
    <div>
      <h2>User Data</h2>
      <button onClick={() => dispatch(fetchUserRequest())}>Fetch User</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
