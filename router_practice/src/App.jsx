
import './App.css'

import React, { lazy, Suspense } from 'react';

import {
  HomeLayout,
  Landing,
  Newsletter,
  Cocktail,
} from './pages';

// const About = lazy(() => import('./pages/About'));

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import LocationExample from './components/LocationExample'
import Counter from './components/counter/Counter';

import Todo from './components/todos/Todo';

import Greeting from './components/greetings/Greeting';

import UserProfile from './components/userprofile/UserProfile'

import CheckboxExample from './components/checkbox-example/CheckboxExample';

import LoginForm from './components/login-form/LoginForm';

import EnhancedComponent from './components/call_HOC_component/enhanced_component/EnhancedComponent';

import UserList from './components/call_HOC_component/user_list/UserList'

import PostList from './components/react-query-example/PostList';

const About = lazy(() => import('./pages/About'));

const mockUser = { name: 'John Doe', email: 'john.doe@example.com' };

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import PortalComponent from './components/react-portal-example/PortalComponent';

import StepFunction from './components/step-function/StepFunction';

const queryClient = new QueryClient();

const submitLogin = (username, password) => {
  console.log('Login attempt:', username, password);
};

const sampleData = "Hello from Parent!";
const isLoading = false; // Toggle this to see the loading state

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
        path: 'enhanced_component',
        element: <EnhancedComponent isLoading={isLoading} data={sampleData} />,
      },
      {
        path: 'user_list_with_data',
        element: <UserList />,
      }, {
        path: 'react-query-example',
        element: <PostList />,
      },
      {
        path: 'react-portal-example',
        element: <PortalComponent />,
      },
      {
        path: 'greetings',
        element: <Greeting name="BOB" />,
      },
      {
        path: 'userprofile',
        element: <UserProfile user={mockUser} />,
      },
      {
        path: 'checkbox_example',
        element: <CheckboxExample />,
      },
      {
        path: 'login_form',
        element: <LoginForm submitLogin={submitLogin} />,
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
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        )
        ,
      },
      {
        path: 'counter',
        element: <Counter />,
      },
      {
        path: 'todo',
        element: <Todo />,
      },
      {
        path: 'step-function',
        element: <StepFunction />,
      }
    ],
  },
]);

function App() {

  return (

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  );

}

export default App