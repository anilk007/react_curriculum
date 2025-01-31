
import './App.css'

import {
  HomeLayout,
  About,
  Landing,
  Newsletter,
  Cocktail,
} from './pages';

import { createBrowserRouter, RouterProvider , Navigate } from 'react-router-dom';

import LocationExample from './components/LocationExample'
import Counter from './components/counter/Counter';

import Todo from './components/todos/Todo';

import Greeting from './components/greetings/Greeting';

import UserProfile from './components/userprofile/UserProfile'

import CheckboxExample from './components/checkbox-example/CheckboxExample';

import LoginForm from './components/login-form/LoginForm';

const mockUser = { name: 'John Doe', email: 'john.doe@example.com' };

const submitLogin = (username, password) => {
  console.log('Login attempt:', username, password);
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'greetings',
        element: <Greeting  name="BOB"/>,
      },
      {
        path: 'userprofile',
        element: <UserProfile  user={mockUser}/>,
      },
      {
        path: 'checkbox_example',
        element: <CheckboxExample />,
      },
      {
        path: 'login_form',
        element: <LoginForm submitLogin={submitLogin}/>,
      },
      {
        path: 'cocktail',
        // element: <h2>Error: Missing Cocktail ID</h2>, // Show error when ID is missing
        element: <Navigate to="/landing" />, // Redirect to landing if no ID is provided
      },
      {
        // path: 'cocktail',
        path: 'cocktail/:id', // Added dynamic route parameter
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'counter',
        element: <Counter />,
      },
      {
        path: 'todo',
        element: <Todo />,
      }
    ],
  },
]);

function App() {
 
  return <RouterProvider router={router} />;
}

export default App