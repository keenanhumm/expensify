import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <div className="container">
                <NavLink to="/" className="nav-link" exact={true}><Image src="images/biglogo.png" responsive /></NavLink>
            </div>
        </header>
    );

};

export default Header;