import { Link, NavLink, Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Navbar';

/*
In React Router, the parent route (HomeLayout in this case) must include 
the <Outlet /> component. This is where the child routes will be rendered.
 Without this, the child routes won't display.
*/

const HomeLayout = () => {
  return (

    <div>
      <Wrapper>
        <h1>HomeLayout</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="landing">Landing</NavLink>
            </li>
            <li>
              <NavLink to="greetings">Greetings</NavLink>
            </li>

            <li>
              <NavLink to="userprofile">User Profile</NavLink>
            </li>

            <li>
              <NavLink to="checkbox_example">checkbox example</NavLink>
            </li>

            <li>
              <NavLink to="login_form">login form</NavLink>
            </li>


            <li>
              <NavLink to="cocktail/244">Cocktail</NavLink>
            </li>
            <li>
              <NavLink to="newsletter">Newsletter</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="counter">Counter</NavLink>
            </li>
            <li>
              <NavLink to="todo">Todo</NavLink>
            </li>
          </ul>
        </nav>
      </Wrapper>
      <Outlet />
    </div>
  );
};
export default HomeLayout;