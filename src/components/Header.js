import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header className="header">
      <h1>Expensify</h1> 
      <div >
        <NavLink to="/" exact={true} activeClassName="is-active">Go Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      </div>
    </header>
);
export default Header;
