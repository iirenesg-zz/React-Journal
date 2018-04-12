import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      <span className="icon-menu icon-dashboard"></span>    
    </NavLink>
    <NavLink to="/favorites" activeClassName="is-active">
      <span className="icon-menu icon-favorites"></span>
    </NavLink>
    <NavLink to="/important" activeClassName="is-active">
      <span className="icon-menu icon-important"></span>
    </NavLink>
  </header>
);

export default Header;
