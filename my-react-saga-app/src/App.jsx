import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserComponent from './components/user/UserComponent';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Redux Saga Example</h1>
      <UserComponent />
    </Provider>
  );
};

export default App;
