import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const styles = {
  active: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    color: 'black',
  }
}

const NavBar = ({ history }) => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/dashboard">Dashboard</NavLink>
  </nav>
)

export default withRouter(NavBar);