import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <div className="container">
        <NavLink to="/create" className="nav-link" activeStyle={{
            color: 'white',
            fontWeight: 'bold',
            textDecoration: 'none'
        }}>
            <img src="images/add.gif" height="40px" width="40px" /> New Expense
        </NavLink>
    </div>
);