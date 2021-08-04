import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: 'orange' };
  return (
    <div>
      <nav>
        <NavLink activeStyle={activeStyle} exact='/' to='/'>
          Home
        </NavLink>
        {' | '}
        <NavLink activeStyle={activeStyle} to='/courses'>
          Courses
        </NavLink>
        {' | '}
        <NavLink activeStyle={activeStyle} to='/about'>
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
