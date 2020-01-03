import React from 'react';
import {NavLink} from 'react-router-dom';
import { startLogout } from '../actions/auth';
import {connect} from 'react-redux';

export const Header = ({ startLogout }) => (
    <header className="header">
      <h1>Expensify</h1> 
      <div >
        <NavLink to="/dashboard" exact={true} activeClassName="is-active">Go Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <button onClick={startLogout} >Logout</button>  
      </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
}
)
export default connect(undefined, mapDispatchToProps )(Header);
