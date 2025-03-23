import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='Header_container'>
            <NavLink to="/" className="logo-container">
                <img src="./images/logo.png" alt="logo" />
            </NavLink>
            <Navbar />
        </header>
    );
};

export default Header;