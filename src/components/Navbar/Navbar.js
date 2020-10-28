import React from 'react';
import './Navbar.scss'
import logo from '../../assets/images/logo_MyOwnLibrary.png'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-list__links">Home</li>
                <li className="navbar-list__links">About</li>
                <a href="/#"><img className="navbar-list__logo" src={logo} alt="Logo"/></a>
                <li className="navbar-list__links">Library</li>
                <li className="navbar-list__links">Booklist</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;